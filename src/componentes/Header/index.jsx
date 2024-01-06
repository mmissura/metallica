import { Link } from 'react-router-dom';

import logoMetallica from '../../assets/Images/logo.png';
export const Header = () => {
  return (
    <header className="w-full bg-black p-4">
      <div className="lg:w-3/4 md:w-3/4 w-full flex justify-between items-center m-auto">
        <Link to="/">
          <img className="w-40" src={logoMetallica} alt="" />
        </Link>
        <h1 className="text-gray-400 font-extrabold lg:text-2xl md:text-lg text-sm italic">
          ...And Metallica For All
        </h1>
      </div>
    </header>
  );
};
