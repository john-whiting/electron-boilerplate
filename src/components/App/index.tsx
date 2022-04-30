import { FC } from 'react';
import { hot } from 'react-hot-loader';
import WindowFrame from '@misc/window/components/WindowFrame';
import ThemePickerProvider from '@src/contexts/ThemePicker';
import IndexPage from '@src/pages';

import 'antd/dist/antd.css';
import './style.less';

const App: FC = () => (
  <main>
    <WindowFrame title='!!BOILERPLATE!!' platform='windows'>
      <ThemePickerProvider theme='light'>
        <IndexPage />
      </ThemePickerProvider>
    </WindowFrame>
  </main>
);

export default hot(module)(App);
