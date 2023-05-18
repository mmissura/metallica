import logoMetallica from '../../assets/Images/logo.png';
import bandMetallica from '../../assets/Images/band1.jpeg';

function Home() {
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
        <img className="w-full rounded-lg" src={bandMetallica} alt="" />
        <h2 className="text-center my-5">Metallica</h2>
      </section>
      <footer className="text-center">Copyright by M&M Sistemas</footer>
    </div>
  );
}

export default Home;
