import styled from 'styled-components';

export const BackgroundContainer = styled('div')`
  min-height: calc(100vh - 28px);
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.backgroundColor ?? '#121212'};
`;

export const BodyContainer = styled('div')`
  padding: 1em;
  width: -webkit-fill-available;
  max-height: calc(100vh - 28px);
  overflow: auto;
`;
