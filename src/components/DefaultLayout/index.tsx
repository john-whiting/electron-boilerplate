import { FC, ReactNode } from 'react';

import { BackgroundContainer } from './StyledComponents';

export type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout: FC = ({ children }) => (
  <BackgroundContainer>{children}</BackgroundContainer>
);
export default DefaultLayout;
