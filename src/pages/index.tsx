import DefaultLayout from '@src/components/DefaultLayout';
import { RoutePaths } from '@src/constants';
import { FC } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AsyncPage from './AsyncPage';

const IndexPage: FC = () => (
  <MemoryRouter>
    <Routes>
      <Route
        path={RoutePaths.Page1}
        element={
          <DefaultLayout>
            <AsyncPage page='Page1' />
          </DefaultLayout>
        }
      />
      <Route
        path={RoutePaths.Settings}
        element={
          <DefaultLayout>
            <AsyncPage page='Settings' />
          </DefaultLayout>
        }
      />
      <Route
        path={RoutePaths.Home}
        element={
          <DefaultLayout>
            <AsyncPage page='Home' />
          </DefaultLayout>
        }
      />
    </Routes>
  </MemoryRouter>
);
export default IndexPage;
