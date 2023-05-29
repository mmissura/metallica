import logoMetallica from '../../assets/Images/logo.png';
export const Header = () => {
  return (
    <header className="w-full bg-black p-4">
      <div className="w-3/4 flex justify-between items-center m-auto">
        <img className="w-40" src={logoMetallica} alt="" />
        <h1 className="text-gray-400 font-extrabold text-2xl italic">
          ...And Metallica For All
        </h1>
      </div>
    </header>
  );
};
