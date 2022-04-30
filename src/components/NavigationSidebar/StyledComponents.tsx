import styled, { css } from 'styled-components';

export const CollapsibleSidebarContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background-color: #212121;
`;

const SidebarItemActive = css`
  border-left: 5px solid #eee;
  margin-left: -5px;
  color: #eee;
`;

export type SidebarItemProps = {
  active?: boolean;
  bottom?: boolean;
};

export const SidebarItem = styled('div')<SidebarItemProps>`
  font-size: 1.75rem;
  color: #999;
  transition: color 200ms ease-out;
  width: 100%;
  padding: 0.25em;
  margin-top: 0.25em;
  display: flex;
  justify-content: center;

  &:hover {
    color: #eee;
  }

  ${(props) => props.active && SidebarItemActive}
`;

export const SidebarItemBottom = styled(SidebarItem)`
  margin-top: auto;
  margin-bottom: 0.25em;

  & + & {
    margin-top: unset;
  }
`;
