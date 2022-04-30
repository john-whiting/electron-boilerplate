import { FC, lazy, Suspense, useMemo } from 'react';

export type AsyncPageProps = {
  page: string;
};

const AsyncPage: FC<AsyncPageProps> = ({ page }) => {
  const Page = useMemo(() => lazy(() => import(`./${page}`)), [page]);

  return <Suspense fallback={<p>Loading...</p>}>{<Page />}</Suspense>;
};
export default AsyncPage;
