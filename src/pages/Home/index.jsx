import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAlbuns } from './actions';
import bandMetallica0 from '../../assets/Images/band0.png';
import bandMetallica from '../../assets/Images/band1.jpeg';

// () => {} - SINTAXE DE AEROFUNCTION

export const Home = () => {
  const [albuns, setAlbuns] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  // sempre que for fazer uma chamada externa (API), usa-se o async na função e o await na resposta da chamada ao endpoint

  const getAlbunsInitial = async () => {
    try {
      setError(false);
      setLoader(true);
      const respostaFuncao = await getAlbuns();
      setAlbuns(respostaFuncao.data.albums);
      setLoader(false);
    } catch (error) {
      setError(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    getAlbunsInitial();
  }, []);

  return (
    // com o tailwind, inserimos o css diretamente no nome da classe
    <div>
      <section className="w-full m-auto">
        <img
          className="w-full flex-row rounded-lg"
          src={bandMetallica}
          alt="Foto da banda"
        />
      </section>
      <section className="p-12 bg-white">
        <h2 className="text-4xl text-center mb-8 font-bold">História</h2>
        <div className="xl:grid xl:grid-col-2 xl:grid-flow-col lg:grid lg:grid-col-2 lg:grid-flow-col gap-12">
          <div>
            <img
              className="border w-100 border-gray-500 shadow-md"
              src={bandMetallica0}
              alt=""
            />
          </div>
          <div className="col-span-2 xl:mt-0 lg:mt-0 mt-8">
            <p className="mb-4">
              O <strong>Metallica</strong> foi formado em Los Angeles,
              Califórnia, no fim de 1981 quando o baterista Lars Ulrich colocou
              um anúncio num jornal de Los Angeles (The Recycler) que dizia
              "Baterista à procura de outros músicos de metal para jam com
              Tygers of Pan Tang, Diamond Head e Iron Maiden".
            </p>

            <Link
              className="text-white font-bold bg-gray-600 p-2 rounded-md"
              to="biografia"
            >
              {' '}
              Leia mais
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-200 p-12 w-full">
        <h2 className="text-4xl text-center mb-8  font-bold">Integrantes</h2>
        <Link className="text-black font-bold" to="integrantes">
          <h2>clique aqui</h2>
        </Link>
      </section>

      <section className="bg-zinc-100 p-12 w-full">
        <h2 className="text-4xl text-center mb-8  font-bold">Discografia</h2>
        {loader == true ? (
          <p className="text-center font-bold my-12 text-2xl">Loading...</p>
        ) : null}

        {error == true ? (
          <p className="text-center font-bold my-12 text-2xl">
            Ocorreu um erro, tente mais tarde!
          </p>
        ) : null}

        <ul className="xl:grid lg:grid md:grid grid-cols-2 gap-8">
          {albuns &&
            albuns.map((discografia) => (
              <Link
                to={`discografia/${discografia.slug}`}
                key={discografia.id}
                state={discografia}
              >
                <li
                  className="m-auto bg-white rounded-md mb-6 border border-zinc-200 shadow-md 
                hover:bg-yellow-400 p-6 xl:grid grid-cols-4 gap-8 items-center"
                >
                  <div className="col-span-1 row-span-4">
                    <img
                      className="w-100 m-auto xl:m-0 lg:m-0"
                      src={discografia.image}
                      alt=""
                    />
                  </div>
                  <div className="text-center xl:text-left lg:text-left xl:mt-0 lg:mt-0 mt-6 col-span-3">
                    <p className="font-bold text-xl">{discografia.name}</p>
                    <p className="font-bold text-xl">{discografia.year}</p>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </section>
    </div>
  );
};
