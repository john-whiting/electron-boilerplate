import styled from 'styled-components';

export const BackgroundContainer = styled('div')`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundColor ?? '#121212'};
`;
