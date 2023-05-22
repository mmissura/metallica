import logoMetallica from '../../assets/Images/logo.png';
import bandMetallica from '../../assets/Images/band1.jpeg';
import bandMetallica2 from '../../assets/Images/band2.jpeg';
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

function Home() {
  const discografias = [
    {
      id: 1,
      name: 'Kill Em All',
      image: kill,
    },
    {
      id: 2,
      name: 'Ride The Lightning',
      image: ride,
    },
    {
      id: 3,
      name: 'Master of Puppets',
      image: master,
    },
    {
      id: 4,
      name: 'Garage Days Re-Revised',
      image: garage,
    },
    {
      id: 5,
      name: '...And Justice for All',
      image: justice,
    },
    {
      id: 6,
      name: 'Black Album',
      image: black,
    },
    {
      id: 7,
      name: 'Live Shit: Bing & Purge',
      image: shit,
    },
    {
      id: 8,
      name: 'Load',
      image: load,
    },
    {
      id: 9,
      name: 'Reload',
      image: reload,
    },
    {
      id: 10,
      name: 'Garage Inc',
      image: garageinc,
    },
    {
      id: 11,
      name: 'S&M',
      image: sm,
    },
    {
      id: 12,
      name: 'St. Anger',
      image: stanger,
    },
    {
      id: 13,
      name: 'Death Magnetic',
      image: death,
    },
    {
      id: 14,
      name: 'Hardwired... to Self-Destruct',
      image: hardwire,
    },
    {
      id: 15,
      name: 'S&M 2',
      image: sm2,
    },
    {
      id: 16,
      name: '72 Seasons',
      image: season,
    },
  ];
  return (
    // com o tailwind, inserimos o css diretamente no nome da classe
    <div>
      <header className="w-full bg-black p-4">
        <div className="w-3/4 flex justify-between items-center m-auto">
          <img className="w-40" src={logoMetallica} alt="" />
          <h1 className="text-gray-400 font-extrabold text-2xl italic">
            ...And Metallica For All
          </h1>
        </div>
      </header>
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
              src={bandMetallica2}
              alt=""
            />
            <img
              className="border w-100 border-gray-500 shadow-md mt-10"
              src={bandMetallica2}
              alt=""
            />
          </div>
          <div className="col-span-2">
            <p>
              O <strong>Metallica</strong> foi formado em Los Angeles,
              Califórnia, no fim de 1981 quando o baterista Lars Ulrich colocou
              um anúncio num jornal de Los Angeles (The Recycler) que dizia
              "Baterista à procura de outros músicos de metal para jam com
              Tygers of Pan Tang, Diamond Head e Iron Maiden".
            </p>

            <p>
              Os guitarristas James Hetfield e Hugh Tanner de Leather Charm
              responderam ao anúncio. Embora ele ainda não tivesse formado uma
              banda, Ulrich perguntou para o fundador da Metal Blade Records
              Brian Slagel se ele podia gravar uma canção para a próxima
              compilação da gravadora intitulada Metal Massacre. Slagel aceitou
              e Ulrich convidou Hetfield para cantar e tocar baixo em 1981.
            </p>

            <p>
              Ulrich conversou com seu amigo Ron Quintana, que estava criando
              nomes para um fanzine. Quintana tinha proposto os nomes de "Metal
              Mania" e "Metallica", portanto, Ulrich utilizou "Metallica" para o
              nome de sua banda. Um outro anúncio foi colocado no The Recycler
              para a posição de baixista, para então James poder cantar e tocar
              guitarra.{' '}
            </p>

            <p>
              Desta vez Dave Mustaine respondeu ao anúncio, e depois de verem
              seu caro equipamento de baixo, Ulrich e Hetfield o chamaram para a
              banda. No início de 1982, os Metallica gravaram a primeira canção
              de sua autoria, "Hit the Lights", para a compilação Metal Massacre
              I. Hetfield tocou a canção na guitarra e Lloyd Grant foi creditado
              como o autor de um dos solos de guitarra da música.{' '}
            </p>

            <p>
              Lançado em 14 de Junho de 1982, a primeira prensagem de Metal
              Massacre I listou incorretamente a banda como "Mettallica". Apesar
              de indignados pelo erro, o Metallica conseguiu criar "buzz"
              suficiente com a canção, e a banda fez seu primeiro concerto ao
              vivo em 14 de Março de 1982, na Radio City em Anaheim, Califórnia
              com o então novo baixista Ron McGovney e por fim Dave Mustaine
              permaneceu na guitarra solo.{' '}
            </p>

            <p>
              O Metallica gravou a sua primeira fita demo, intitulada No Life
              'Til Leather, um nome inspirado na primeira frase de Hit the
              Lights. No Outono de 1982, Ulrich e Hetfield assistiram a um show
              na casa noturna Whisky a Go Go, onde estava se apresentando o
              baixista Cliff Burton juntamente com a sua banda, o Trauma. Ambos
              ficaram impressionados com a habilidade e as peculiaridades de
              Burton como baixista, e então o convidaram para se juntar ao
              Metallica.{' '}
            </p>

            <p>
              Hetfield e Mustaine queriam Ron McGovney fora da banda por acharem
              que ele "não estava contribuindo em nada", além do próprio Ron,
              que também não estava contente com a banda. Embora Burton tenha
              inicialmente recusado o convite, no final daquele ano ele o
              aceitou com a condição da banda mudar-se para El Cerrito em San
              Francisco Bay Area. A primeira apresentação ao vivo do Metallica
              com Burton foi na casa noturna The Stone, em março de 1983, e a
              primeira gravação com Burton foi a fita demo Megaforce, de 1983.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 p-12">
        <h2 className="text-4xl text-center mb-8  font-bold">Discografia</h2>
        <ul>
          {discografias &&
            discografias.map((discografia) => (
              <li
                key={discografia.id}
                className="w-1/2 bg-white rounded-md mb-6 border border-zinc-200 shadow-md 
              hover:bg-yellow-400 p-7 xl:grid xl:grid-col-2 xl:grid-flow-col 
              lg:grid lg:grid-col-2 lg:grid-flow-col gap-12 m-auto items-center"
              >
                <div>
                  <img
                    className="w-20 m-auto xl:m-0 lg:m-0"
                    src={discografia.image}
                    alt=""
                  />
                </div>
                <div className="text-center xl:mt-0 lg:mt-0 mt-6">
                  <p className="font-bold text-xl">{discografia.name}</p>
                  <p>1983</p>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <footer className="text-center p-12 bg-black text-white">
        &copy; Copyright 2023 by MM Desenvolvimentos
      </footer>
    </div>
  );
}

export default Home;
