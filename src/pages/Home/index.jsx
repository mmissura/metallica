import { Link } from 'react-router-dom';
import bandMetallica0 from '../../assets/Images/band0.png';
import bandMetallica from '../../assets/Images/band1.jpeg';
import kill from '../../assets/Images/kill.png';
import ride from '../../assets/Images/ride.png';
import master from '../../assets/Images/master.png';
import garage from '../../assets/Images/garage.png';
import justice from '../../assets/Images/justice.png';
import black from '../../assets/Images/black.png';
import shit from '../../assets/Images/shit.png';
import load from '../../assets/Images/load.png';
import reload from '../../assets/Images/reload.png';
import garageinc from '../../assets/Images/garageinc.png';
import sm from '../../assets/Images/sm.png';
import stanger from '../../assets/Images/stanger.png';
import death from '../../assets/Images/death.png';
import hardwire from '../../assets/Images/hardwire.png';
import sm2 from '../../assets/Images/sm2.png';
import season from '../../assets/Images/72.png';

export function Home() {
  const discografias = [
    {
      id: 1,
      name: 'Kill Em All',
      image: kill,
      year: 1983,
      slug: 'kill-em-all',
      trackList: [
        '1 - Hit the Lights',
        '2 - Seek and Destroy',
        '3 - Phantom Lord',
        '4 - Whiplash',
        '5 - Motorbreath',
        '6 - Metal Militia',
        '7 - The Four Horsemen',
        '8 - (Anesthesia) Pulling Teeth',
        '9 - Jump in the Fire',
        '10 - No Remorse',
      ],
    },
    {
      id: 2,
      name: 'Ride The Lightning',
      image: ride,
      year: 1984,
      slug: 'ride-the-lighting',
      trackList: ['1 - ', '2 - '],
    },
    {
      id: 3,
      name: 'Master of Puppets',
      image: master,
      year: 1986,
    },
    {
      id: 4,
      name: 'Garage Days Re-Revised',
      image: garage,
      year: 1987,
    },
    {
      id: 5,
      name: '...And Justice for All',
      image: justice,
      year: 1988,
    },
    {
      id: 6,
      name: 'Black Album',
      image: black,
      year: 1991,
    },
    {
      id: 7,
      name: 'Live Shit: Bing & Purge',
      image: shit,
      year: 1993,
    },
    {
      id: 8,
      name: 'Load',
      image: load,
      year: 1996,
    },
    {
      id: 9,
      name: 'Reload',
      image: reload,
      year: 1997,
    },
    {
      id: 10,
      name: 'Garage Inc',
      image: garageinc,
      year: 1998,
    },
    {
      id: 11,
      name: 'S&M',
      image: sm,
      year: 1999,
    },
    {
      id: 12,
      name: 'St. Anger',
      image: stanger,
      year: 2003,
    },
    {
      id: 13,
      name: 'Death Magnetic',
      image: death,
      year: 2008,
    },
    {
      id: 14,
      name: 'Hardwired... to Self-Destruct',
      image: hardwire,
      year: 2016,
    },
    {
      id: 15,
      name: 'S&M 2',
      image: sm2,
      year: 2020,
    },
    {
      id: 16,
      name: '72 Seasons',
      image: season,
      year: 2023,
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
      <section className="bg-zinc-100 p-12 w-full">
        <h2 className="text-4xl text-center mb-8  font-bold">Discografia</h2>
        <ul className="xl:grid lg:grid md:grid grid-cols-2 gap-8">
          {discografias &&
            discografias.map((discografia) => (
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
}
