import { LoadingIcon } from '@src/components/AsyncContent/StyledComponents';
import { FC, lazy, Suspense, useMemo } from 'react';
import styled from 'styled-components';

export type AsyncPageProps = {
  page: string;
};

const CenteredDiv = styled('div')`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const AsyncPage: FC<AsyncPageProps> = ({ page }) => {
  const Page = useMemo(() => lazy(() => import(`./${page}`)), [page]);

  return (
    <Suspense
      fallback={
        <CenteredDiv>
          <LoadingIcon centered={true} />
        </CenteredDiv>
      }
    >
      {<Page />}
    </Suspense>
  );
};
export default AsyncPage;
