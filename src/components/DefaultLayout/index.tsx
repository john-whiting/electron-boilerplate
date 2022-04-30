import { FileOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { RoutePaths } from '@src/constants';
import { Navigatable } from '@src/types';
import { FC, ReactNode, useMemo } from 'react';
import CollapsibleSidebar from '../NavigationSidebar';

import { BackgroundContainer, BodyContainer } from './StyledComponents';

export type DefaultLayoutProps = {
  children?: ReactNode;
  navigatables?: Navigatable[];
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, navigatables }) => {
  const defaultNavigatables = useMemo(
    () => [
      {
        id: '1',
        icon: <HomeOutlined />,
        tooltip: 'Home',
        href: RoutePaths.Home,
      },
      {
        id: '2',
        icon: <FileOutlined />,
        tooltip: 'Page 1',
        href: RoutePaths.Page1,
      },
      {
        id: '3',
        icon: <SettingOutlined />,
        tooltip: 'Settings',
        href: RoutePaths.Settings,
        bottom: true,
      },
    ],
    [],
  );
  return (
    <BackgroundContainer>
      <CollapsibleSidebar navigatables={navigatables ?? defaultNavigatables} />
      <BodyContainer>{children}</BodyContainer>
    </BackgroundContainer>
  );
};
export default DefaultLayout;
