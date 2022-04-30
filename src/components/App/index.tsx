import { FC } from 'react';
import { hot } from 'react-hot-loader';
import ThemePickerProvider from '@src/contexts/ThemePicker';
import DefaultLayout from '../DefaultLayout';

import 'antd/dist/antd.css';
import './style.less';
import IndexPage from '@src/pages';

const App: FC = () => (
  <main>
    <ThemePickerProvider theme='light'>
      <DefaultLayout>
        <IndexPage />
      </DefaultLayout>
    </ThemePickerProvider>
  </main>
);

export default hot(module)(App);
