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

  const integrantes = [
    {
      id: 1,
      name: 'James Hetfiled',
      slug: 'james-hetfield',
      image:
        'https://bravewords.com/medias-static/images/news/2017/59C18005-metallica-frontman-james-hetfield-one-i-stopped-breaking-strings-live-i-wondered-why-three-new-promo-videos-posted-for-hetfield-hammett-experience-image.jpg',
      biografia: [
        'James Alan Hetfield (Downey, 3 de agosto de 1963) é um vocalista, guitarrista, produtor musical, empresário e customizador de carro snorte-americano. É o co-fundador (juntamente com Lars Ulrich) e o principal compositor da banda de heavy metal Metallica. No ano de 2004, James foi considerado o melhor guitarrista base de heavy metal de todos os tempos pela revista Guitar World, e em 2010 considerado pela MusicRadar o 12º melhor vocalista de todos os tempos.',
        'James Hetfield foi criado numa família norte-americana tradicional, seguidores rigorosos da Ciência Cristã, cujos valores começaram a ser questionados por ele durante a adolescência, o que criou vários conflitos com seu pai, Virgil Hetfield, que era camionista. James voltaria à fé somente em meados da década de 1990. Sua mãe, Cynthia, foi cantora lírica quando jovem, e ajudou James em seus primeiros passos na música quando ele era criança. Virgil saiu de casa quando James tinha treze anos (1977) e não voltou mais. James voltou a manter contato com seu pai somente depois do lançamento do Black Album, mas disse em uma entrevista que achou o comportamento do pai inapropriado, pois ele só o procurava para assinar certos papéis.',
      ],
    },
    {
      id: 2,
      name: 'Lars Ulrich',
      slug: 'lars-ulrich',
      image:
        'https://bravewords.com/medias-static/images/news/2017/59C18005-metallica-frontman-james-hetfield-one-i-stopped-breaking-strings-live-i-wondered-why-three-new-promo-videos-posted-for-hetfield-hammett-experience-image.jpg',
      biografia: [
        'Sir Lars Ulrich (Gentofte, 26 de dezembro de 1963) é um músico, ator, empresário, produtor musical, radialista e ex-tenista dinamarquês. Alcançou fama mundial por ser o baterista e o co-fundador (juntamente com James Hetfield) da banda norte-americana de heavy metal, Metallica. Ele é filho do ex-tenista profissional Torben Ulrich, neto do também ex-tenista Einer Ulrich, e foi afilhado do músico de jazz Dexter Gordon. Em 2004, a revista Kerrang! elegeu Lars a 9ª personalidade de maior influência no mundo do rock n roll. Ficou em 55° lugar na lista dos "66 melhores bateristas de hard rock e metal de todos os tempos" do site Loudwire.',
      ],
    },
  ];

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
        <ul className="xl:grid lg:grid md:grid grid-cols-4 gap-8">
          {integrantes &&
            integrantes.map((integrante) => (
              <Link
                to={`integrantes/${integrante.slug}`}
                key={integrante.id}
                state={integrante}
              >
                <li className="w-full text-center bg-white" key={integrante.id}>
                  <img src={integrante.image}></img>
                  <p>{integrante.name}</p>
                </li>
              </Link>
            ))}
        </ul>
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
