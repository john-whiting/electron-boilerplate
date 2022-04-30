import { Navigatable } from '@src/types';
import { FC, useMemo } from 'react';
import NavigatableComponent from './navigatableComponent';
import { CollapsibleSidebarContainer } from './StyledComponents';

export type NavigatableSidebarItem = Navigatable & {
  bottom?: boolean;
};

export type CollapsibleSidebarProps = {
  navigatables: NavigatableSidebarItem[];
};

const CollapsibleSidebar: FC<CollapsibleSidebarProps> = ({ navigatables }) => {
  const sortedNavigatables = useMemo(
    () =>
      navigatables.sort((a, b) => {
        if (a.bottom && !b.bottom) return 1;
        if (b.bottom && !a.bottom) return -1;
        return 0;
      }),
    [navigatables],
  );

  const renderedNavigatables = useMemo(
    () =>
      sortedNavigatables.map((navigatable) => (
        <NavigatableComponent key={navigatable.id} navigatable={navigatable} />
      )),
    [sortedNavigatables],
  );
  return (
    <CollapsibleSidebarContainer>
      {renderedNavigatables}
    </CollapsibleSidebarContainer>
  );
};
export default CollapsibleSidebar;
