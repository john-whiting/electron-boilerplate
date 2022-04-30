import { FC } from 'react';
import { hot } from 'react-hot-loader';
import ThemePickerProvider from '@src/contexts/ThemePicker';
import IndexPage from '@src/pages';

import 'antd/dist/antd.css';
import './style.less';

const App: FC = () => (
  <main>
    <ThemePickerProvider theme='light'>
      <IndexPage />
    </ThemePickerProvider>
  </main>
);

export default hot(module)(App);
