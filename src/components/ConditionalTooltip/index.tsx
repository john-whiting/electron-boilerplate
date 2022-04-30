import { Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';
import { FC, ReactElement, ReactNode } from 'react';

export type ConditionalTooltipProps = {
  tooltip?: ReactNode;
  children?: ReactNode;
  placement?: TooltipPlacement;
  render?: (tooltip?: ReactNode, children?: ReactNode) => ReactElement;
};

const ConditionalTooltip: FC<ConditionalTooltipProps> = ({
  tooltip,
  children,
  placement,
  render,
}) => {
  if (!tooltip || (typeof tooltip === 'string' && tooltip.length === 0))
    return <>{children}</>;
  if (render) return render(tooltip, children);
  return (
    <Tooltip overlay={tooltip} placement={placement}>
      {children}
    </Tooltip>
  );
};
export default ConditionalTooltip;
