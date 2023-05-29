import { Routes, Route } from 'react-router-dom';
import { LayoutMetallica } from '../layout';
import { Home } from '../pages/Home';
import { Biografia } from '../pages/Biografia';

export const Router = () => {
  return (
    <Routes>
      <Route element={<LayoutMetallica />}>
        <Route path="/" element={<Home />} />
        <Route path="biografia" element={<Biografia />} />
      </Route>
    </Routes>
  );
};
