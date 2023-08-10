import { Routes, Route } from 'react-router-dom';
import { LayoutMetallica } from '../layout';
import { Home } from '../pages/Home';
import { Biografia } from '../pages/Biografia';
import { Discografia } from '../pages/Discografia';
import { Integrantes } from '../pages/Integrantes';

export const Router = () => {
  return (
    <Routes>
      <Route element={<LayoutMetallica />}>
        <Route path="/" element={<Home />} />
        <Route path="biografia" element={<Biografia />} />
        <Route path="discografia" element={<Discografia />} />
        <Route path="integrantes/:slug" element={<Integrantes />} />
      </Route>
    </Routes>
  );
};
