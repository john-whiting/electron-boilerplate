import { LoadingOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

const centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type LoadingIconProps = {
  centered?: boolean;
};

export const LoadingIcon = styled(LoadingOutlined)<LoadingIconProps>`
  font-size: 32px;
  color: ${(props) => props.theme.primaryColor};

  ${(props) => props.centered && centered}
`;
