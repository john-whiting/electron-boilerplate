import { FC, ReactNode } from 'react';
import { LoadingIcon } from './StyledComponents';

export type AsyncContentProps = {
  loading?: boolean;
  centered?: boolean;
  children?: ReactNode;
};

const AsyncContent: FC<AsyncContentProps> = ({
  loading,
  centered,
  children,
}) => {
  if (loading) return <LoadingIcon centered={centered} />;
  return <>{children}</>;
};
export default AsyncContent;
