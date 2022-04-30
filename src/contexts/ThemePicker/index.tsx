import { Theme } from '@src/types';
import {
  FC,
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components';

export type ThemePickerProviderProps = {
  theme: Theme;
  children?: ReactNode;
};

export type ThemePickerContextReturn = {
  setTheme: (theme: Theme) => void;
};

const defaultContext: ThemePickerContextReturn = {
  setTheme: (theme) => console.log(theme),
};

const ThemePickerContext =
  createContext<ThemePickerContextReturn>(defaultContext);

const ThemePickerProvider: FC<ThemePickerProviderProps> = ({
  theme,
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [themeObject, setThemeObject] = useState({});

  useEffect(() => {
    import(`@src/themes/${currentTheme}`).then((defaultObject) => {
      setThemeObject(defaultObject.default);
    });
  }, [currentTheme]);

  const setTheme = useCallback((theme: Theme) => setCurrentTheme(theme), []);

  const context = useMemo(
    () => ({
      setTheme,
    }),
    [setTheme],
  );

  return (
    <>
      <ThemePickerContext.Provider value={context}>
        <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
      </ThemePickerContext.Provider>
    </>
  );
};

export const useThemePicker = () => useContext(ThemePickerContext);

export default ThemePickerProvider;
