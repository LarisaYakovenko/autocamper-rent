import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import HomePage from 'pages/HomePage/HomePage';
// import CatalogPage from 'pages/CatalogPage/CatalogPage';
// import FavoritesPage from 'pages/FavoritesPage';

import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
