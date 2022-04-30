import { RoutePaths } from '@src/contants';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => (
  <>
    Page 1 <Link to={RoutePaths.Home}>Goto Home Page</Link>
  </>
);
export default HomePage;
