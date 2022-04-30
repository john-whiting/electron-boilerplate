import { ReactNode } from 'react';

export type Navigatable = {
  id: string;
  icon: ReactNode;
  tooltip?: string;
  href?: string;
  visible?: boolean;
  onClick?: () => void;
  onHover?: () => void;
};
