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
        '1 - Hit the Lights (4:17)',
        '2 - The Four Horsemen (7:12)',
        '3 - Motorbreath (3:07)',
        '4 - Jump in the Fire (4:41)',
        '5 - (Anesthesia) Pulling Teeth (4:14)',
        '6 - Whiplash (4:08)',
        '7 - Phantom Lord (5:01)',
        '8 - No Remorse (6:26)',
        '9 - Seek and Destroy (6:54)',
        '10 - Metal Militia (5:11)',
      ],
    },
    {
      id: 2,
      name: 'Ride The Lightning',
      image: ride,
      year: 1984,
      slug: 'ride-the-lighting',
      trackList: [
        '1 - Fight Fire With Fire (4:44)',
        '2 - Ride The Lightning (6:36)',
        '3 - For Whom The Bell Tolls (5:09)',
        '4 - Fade To Black (6:57)',
        '5 - Trapped Under Ice (4:04)',
        '6 - Escape (4:23)',
        '7 - Creeping Death (6:35)',
        '8 - The Call Of Ktulu (8:53)',
      ],
    },
    {
      id: 3,
      name: 'Master of Puppets',
      image: master,
      year: 1986,
      slug: 'mster-of-puppets',
      trackList: [
        '1 - Battery (5:13)',
        '2 - Master of Puppets (8:36)',
        '3 - The Thing That Should Not Be (6:37)',
        '4 - Welcome Home (Sanitarium) (6:28)',
        '5 - Disposable Heroes (8:17)',
        '6 - Lepper Messiah (5:41)',
        '7 - Orion (8:28)',
        '8 - Damage Inc (5:30)',
      ],
    },
    {
      id: 4,
      name: 'Garage Days Re-Revised',
      image: garage,
      year: 1987,
      slug: 'garage-days',
      trackList: [
        '1 - Helpless (6:38)',
        '2 - The Small Hours (6:43)',
        '3 - The Wait (4:55)',
        '4 - Crash Course In Brain Surgery (3:10)',
        '5 - Last Caress/Green Hell (3:29)',
      ],
    },
    {
      id: 5,
      name: '...And Justice for All',
      image: justice,
      year: 1988,
      slug: 'and-justic-for-all',
      trackList: [
        '1 - Blackned (6:41)',
        '2 - ...And Justice For All (9:47)',
        '3 - Eye Of The Beholder (6:30)',
        '4 - One (7:24)',
        '5 - The Shortest Straw (6:36)',
        '6 - Harvester Of Sorrow (5:46)',
        '7 - The Frayed Ends Of Sanity (7:44)',
        '8 - To Live Is To Die (9:49)',
        '9 - Dyers Eve (5:13)',
      ],
    },
    {
      id: 6,
      name: 'Black Album',
      image: black,
      year: 1991,
      slug: 'black-album',
      trackList: [
        '1 - Enter Sandman (5:31)',
        '2 - Sad But True (5:23)',
        '3 - Holier Than You (3:48)',
        '4 - The Unforgiven (6:27)',
        '5 - Wherever I May Roam (6:46)',
        '6 - Dont Tread On Me (4:01)',
        '7 - Throught The Never (4:03)',
        '8 - Nothing Else Matters (6:29)',
        '9 - Of Wolf And Man (4:17)',
        '10 - The God That Failed (5:05)',
        '11 - My Friend Of Misery (6:50)',
        '12 - The Struggle Within (3:54)',
      ],
    },
    {
      id: 7,
      name: 'Live Shit: Bing & Purge',
      image: shit,
      year: 1993,
      slug: 'live-shit',
      trackList: [
        'CD 1',
        '1 - Enter Sandman (7:28)',
        '2 - Creeping Death (7:28)',
        '3 - Harvester of Sorrow (7:19)',
        '4 - Welcome Home (Sanitarium) (6:39)',
        '5 - Sad but True (6:07)',
        '6 - Of Wolf and Man (6:22)',
        '7 - The Unforgiven (6:48)',
        '8 - Justice Medley (9:38)',
        'Eye of the Beholder',
        'Blackened',
        'The Frayed Ends of Sanity',
        '...And Justice for All',
        'Blackened" (final)',
        '9 - Solos (baixo/guitarra) (18:49)',
        '',
        'CD 2',
        '1 - Through the Never (3:47)',
        '2 - For Whom the Bell Tolls (5:48)',
        '3 - Fade to Black (7:12)',
        '4 - Master of Puppets (4:35)',
        '5 - Seek & Destroy (18:08)',
        '6 - Whiplash (5:34)',
        '',
        'CD 3',
        '1 - Nothing Else Matters (6:22)',
        '2 - Wherever I May Roam (6:33)',
        '3 - Am I Evil? (5:42)',
        '4 - Last Caress (1:25)',
        '5 - One (10:27)',
        '6 - So What?/Battery (10:05)',
        '7 - The Four Horsemen (6:08)',
        '8 - Motorbreath (3:14)',
        '9 - Stone Cold Crazy (5:32)',
        '',

        '',
      ],
    },
    {
      id: 8,
      name: 'Load',
      image: load,
      year: 1996,
      slug: 'load',
      trackList: [
        '1 - Aint My Bitch (5:04)',
        '2 - 2 x 4 (5:28)',
        '3 - The House Of Jack Bull (6:39)',
        '4 - Until It Sleeps (4:30)',
        '5 - King Nothing (5:28)',
        '6 - Hero Of The Day (4:22)',
        '7 - Bleeding Me (8:18)',
        '8 - Cure (4:54)',
        '9 - Poor Twister Me (4:00)',
        '10 - Wasting My Hate (3:57)',
        '11 - Mama Said (5:19)',
        '12 - Thorn Within (5:51)',
        '13 - Ronnie (5:17)',
        '14 - The Outlaw Torn (9:52)',
      ],
    },
    {
      id: 9,
      name: 'Reload',
      image: reload,
      year: 1997,
      slug: 'reload',
      trackList: [
        '1 - Fuel (4:29)',
        '2 - The Memory Remains (4:39)',
        '3 - Devils Dance (5:18)',
        '4 - The Unforgiven II (6:36)',
        '5 - Better Than You (5:21)',
        '6 - Slither (5:13)',
        '7 - Carpe Diem Baby (6:12)',
        '8 - Bad Seed (4:05)',
        '9 - Where The Wild Things Are (6:52)',
        '10 - Prince Charming (6:04)',
        '11 - Low Mans Lyric (7:36)',
        '12 - Attitude (5:16)',
        '13 - Fixxxer (8:14)',
      ],
    },
    {
      id: 10,
      name: 'Garage Inc',
      image: garageinc,
      year: 1998,
      slug: 'garage-inc',
      trackList: [
        'CD 1',
        '1 - Free Speech for the Dumb (2:35)',
        '2 - Its Electric (3:33)',
        '3 - Sabbra Cadabra/A National Acrobat (6:20)',
        '4 - Turn the Page (6:06)',
        '5 - Die, Die My Darling (2:29)',
        '6 - Loverman (7:52)',
        '7 - Mercyful Fate Medley',
        'Satans Fall',
        'Curse of the Pharaohs',
        'A Corpse Without Soul',
        'Into the Coven',
        'Evil (11:11)',
        '',
        '8 - Astronomy (6:37)',
        '9 - Whiskey in the Jar (5:04)',
        '10 - Tuesdays Gone (9:05)',
        '11 - The More I See (4:48)',
        '',
        'CD 2',
        '1 - Helpless (6:38)',
        '2 - The Small Hours (6:43)',
        '3 - The Wait (4:55)',
        '4 - Crash Course in Brain Surgery (3:10)',
        '5 - Last Caress/Green Hell (3:30)',
        '6 - Am I Evil? (7:50)',
        '7 - Blitzkrieg (3:37)',
        '8 - Breadfan (5:41)',
        '9 - The Prince (4:26)',
        '10 - Stone Cold Crazy (2:19)',
        '11 - So What (3:09)',
        '12 - Killing Time (3:04)',
        '13 - Overkill (4:05)',
        '14 - Damage Case (3:40)',
        '15 - Stone Dead Forever (4:52)',
        '16 - Too Late Too Late (3:12)',
      ],
    },
    {
      id: 11,
      name: 'S&M',
      image: sm,
      year: 1999,
      slug: 'sm',
      trackList: [
        'CD 1',
        '1 - The Ecstasy Of Gold (2:31)',
        '2 - The Call Of Ktulu (9:34)',
        '3 - Master Of Puppets (8:55)',
        '4 - Of Wolf And Man (4:19)',
        '5 - The Thing That Should Not Be (7:27)',
        '6 - Fuel (4:36)',
        '7 - The Memory Remains (4:42)',
        '8 - No Leaf Clover (5:43)',
        '9 - Hero of the Day (4:45)',
        '10 - Devils Dance (5:26)',
        '11 - Bleeding Me (9:02)',
        '',
        'CD 2',
        '1 - Nothing Else Matters (6:47)',
        '2 - Until It Sleeps (4:30)',
        '3 - For Whom the Bell Tolls (4:52)',
        '4 - Minus Human (4:20)',
        '5 - Wherever I May Roam (7:02)',
        '6 - The Outlaw Torn (9:59)',
        '7 - Sad but True (5:46)',
        '8 - One (7:53)',
        '9 - Enter Sandman (7:39)',
        '10 - Battery (7:25)',
      ],
    },
    {
      id: 12,
      name: 'St. Anger',
      image: stanger,
      year: 2003,
      slug: 'st-anger',
      trackList: [
        '1 - Frantic (5:51)',
        '2 - St. Anger (7:21)',
        '3 - Some Kind Of Monster (8:26)',
        '4 - Dirty Window (5:24)',
        '5 - Invisible Kid (8:31)',
        '6 - My World (5:45)',
        '7 - Shoot me Again (7:10)',
        '8 - Sweet Amber (5:27)',
        '9 - The Unnamed Feeling (7:10)',
        '10 - Purify (5:14)',
        '11 - All Within my Hands (8:49)',
      ],
    },
    {
      id: 13,
      name: 'Death Magnetic',
      image: death,
      year: 2008,
      slug: 'death-magnetic',
      trackList: [
        '1 - That Was Just Your Life (7:08)',
        '2 - The End of the Line (7:52)',
        '3 - Broken, Beat & Scarred (6:25)',
        '4 - The Day That Never Comes (7:56)',
        '5 - All Nightmare Long (7:57)',
        '6 - Cyanide (6:39)',
        '7 - The Unforgiven III (7:46)',
        '8 - The Judas Kiss (8:00)',
        '9 - Suicide & Redemption (9:57)',
        '10 - My Apocalypse (5:01)',
      ],
    },
    {
      id: 14,
      name: 'Hardwired... to Self-Destruct',
      image: hardwire,
      year: 2016,
      slug: 'hardwired',
      trackList: [
        'CD 1',
        '1 - Hardwired (3:09)',
        '2 - Atlas, Rise! (6:28)',
        '3 - Now That Were Dead (6:59)',
        '4 - Moth into Flame (5:50)',
        '5 - Dream No More (6:29)',
        '6 - Halo On Fire (8:15)',
        '',
        'CD 2',
        '1 - Confusion (6:43)',
        '2 - ManUNkind (6:55)',
        '3 - Here Comes Revenge (7:17)',
        '4 - Am I Savage? (6:30)',
        '5 - Murder One (5:45)',
        '6 - Spit Out the Bone (7:09)',
      ],
    },
    {
      id: 15,
      name: 'S&M 2',
      image: sm2,
      year: 2020,
      slug: 'sm2',
      trackList: [
        'CD 1',
        '1 - The Ecstasy of Gold (2:41)',
        '2 - The Call of Ktulu (9:14)',
        '3 - For Whom the Bell Tolls (4:37)',
        '4 - The Day That Never Comes (8:27)',
        '5 - The Memory Remains (5:42)',
        '6 - Confusion (6:41)',
        '7 - Moth into Flame (6:18)',
        '8 - The Outlaw Torn (10:03)',
        '9 - No Leaf Clover (5:30)',
        '10 - Halo on Fire (8:17)',
        '',
        'CD 2',
        '1 - Intro to Scythian Suite (5:17)',
        '2 - Scythian Suite, Opus 20 II: The Enemy God and the Dance of the Dark Spirits (3:39)',
        '3 - Intro to the Iron Foundry (1:03)',
        '4 - The Iron Foundry, Opus 19 (4:16)',
        '5 - The Unforgiven III (8:19)',
        '6 - All Within My Hands (6:13)',
        '7 - (Anesthesia) - Pulling Teeth (7:27)',
        '8 - Wherever I May Roam (6:32)',
        '9 - One (9:23)',
        '10 - Master of Puppets (8:29)',
        '11 - Nothing Else Matters (6:39)',
        '12 - Enter Sandman (8:45)',
      ],
    },
    {
      id: 16,
      name: '72 Seasons',
      image: season,
      year: 2023,
      slug: 'seasons',
      trackList: [
        '1 - 72 Seasons (7:39)',
        '2 - Shadows Follow (6:12)',
        '3 - Screaming Suicide (5:30)',
        '4 - Sleepwalk My Life Away (6:56)',
        '5 - You Must Burn! (7:03)',
        '6 - Lux Æterna (3:22)',
        '7 - Crown of Barbed Wire (5:49)',
        '8 - Chasing Light (6:45)',
        '9 - If Darkness Had a Son (6:36)',
        '10 - Too Far Gone? (4:34)',
        '11 - Room of Mirrors (5:34)',
        '12 - Inamorata (11:10)',
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
