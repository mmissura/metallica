import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMembers } from '../Integrantes/actions';
import { getAlbuns } from '../Discografia/actions';
import { useDiscografiaStore } from '../Discografia/Store';
import { useMemberStore } from '../Integrantes/Store';
import bandMetallica0 from '../../assets/Images/band0.png';
import bandMetallica from '../../assets/Images/band1.jpeg';

// () => {} - SINTAXE DE AEROFUNCTION

export const Home = () => {
  const { albuns, loaderAlbuns, errorAlbuns, setAlbumSelected } =
    useDiscografiaStore();
  const { members, exMembers, loaderMembers, errorMembers } = useMemberStore();
  const navigate = useNavigate();

  // sempre que for fazer uma chamada externa (API), usa-se o async na função e o await na resposta da chamada ao endpoint

  const handleSetAlbum = (album) => {
    setAlbumSelected(album);
    navigate(`discografia`);
  };

  useEffect(() => {
    getAlbuns();
    getMembers();
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
        {/* <Link className="text-black font-bold" to="integrantes">
          <h2 className="text-center">Clique Aqui</h2>
        </Link> */}
        {loaderMembers == true ? (
          <p className="text-center font-bold my-12 text-2xl">Loading...</p>
        ) : null}

        {errorMembers == true ? (
          <p className="text-center font-bold my-12 text-2xl">
            Ocorreu um erro, tente mais tarde!
          </p>
        ) : null}
        <ul className="xl:grid lg:grid md:grid grid-cols-4 gap-8">
          {members &&
            members.map((integrante) => (
              <Link
                to={`integrantes/${integrante.slug}`}
                key={integrante.id}
                state={integrante}
              >
                <li className="w-full text-center bg-white" key={integrante.id}>
                  <img src={integrante.thumbnail}></img>
                  <p>{integrante.name}</p>
                </li>
              </Link>
            ))}
        </ul>
        <h2 className="text-4xl text-center mb-8  font-bold mt-8">
          Ex-Integrantes
        </h2>
        <ul className="xl:grid lg:grid md:grid grid-cols-5 gap-8">
          {exMembers &&
            exMembers.map((exIntegrante) => (
              <Link
                to={`integrantes/${exIntegrante.slug}`}
                key={exIntegrante.id}
                state={exIntegrante}
              >
                <li
                  className="w-full text-center bg-white"
                  key={exIntegrante.id}
                >
                  <img src={exIntegrante.thumbnail}></img>
                  <p>{exIntegrante.name}</p>
                </li>
              </Link>
            ))}
        </ul>
      </section>

      <section className="bg-zinc-100 p-12 w-full">
        <h2 className="text-4xl text-center mb-8  font-bold">Discografia</h2>
        {loaderAlbuns == true ? (
          <p className="text-center font-bold my-12 text-2xl">Loading...</p>
        ) : null}
        {errorAlbuns == true ? (
          <p className="text-center font-bold my-12 text-2xl">
            Ocorreu um erro, tente mais tarde!
          </p>
        ) : null}
        <ul className="xl:grid lg:grid md:grid grid-cols-2 gap-8">
          {albuns &&
            albuns.map((discografia) => (
              <li
                key={discografia.id}
                className="m-auto bg-white rounded-md mb-6 border border-zinc-200 shadow-md 
                hover:bg-yellow-400 p-6 xl:grid grid-cols-4 gap-8 items-center cursor-pointer"
                onClick={() => {
                  handleSetAlbum(discografia);
                }}
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
            ))}
        </ul>
      </section>
    </div>
  );
};
