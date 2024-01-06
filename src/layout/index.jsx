import { Outlet } from 'react-router-dom';
import { Header } from '../componentes/Header';
import { Footer } from '../componentes/Footer';

export const LayoutMetallica = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
