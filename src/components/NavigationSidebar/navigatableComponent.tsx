import { FC, useCallback, useMemo } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { NavigatableSidebarItem } from '.';
import ConditionalTooltip from '../ConditionalTooltip';
import { SidebarItem, SidebarItemBottom } from './StyledComponents';

export type NavigatableComponentProps = {
  navigatable: NavigatableSidebarItem;
};

const NavigatableComponent: FC<NavigatableComponentProps> = ({
  navigatable,
}) => {
  const match = useMatch(navigatable.href);
  const isActive = useMemo(() => !!match, [match]);
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    if (navigatable.onClick) return navigatable.onClick();
    navigate(navigatable.href);
  }, [navigatable, navigate]);

  const SidebarComponent = useMemo(
    () => (navigatable.bottom ? SidebarItemBottom : SidebarItem),
    [navigatable.bottom],
  );

  if (navigatable.visible !== undefined && !navigatable.visible) return <></>;

  return (
    <ConditionalTooltip
      key={navigatable.id}
      tooltip={navigatable.tooltip}
      placement='right'
    >
      <SidebarComponent
        active={isActive}
        bottom={navigatable.bottom}
        onClick={onClick}
        onMouseEnter={navigatable.onHover}
      >
        {navigatable.icon}
      </SidebarComponent>
    </ConditionalTooltip>
  );
};
export default NavigatableComponent;
