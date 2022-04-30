import { RoutePaths } from '@src/contants';
import { FC } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AsyncPage from './AsyncPage';

const IndexPage: FC = () => (
  <MemoryRouter>
    <Routes>
      <Route path={RoutePaths.Page1} element={<AsyncPage page='Page1' />} />
      <Route path={RoutePaths.Home} element={<AsyncPage page='Home' />} />
    </Routes>
  </MemoryRouter>
);
export default IndexPage;
