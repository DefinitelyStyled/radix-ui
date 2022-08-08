import * as RadixTooltip from '@radix-ui/react-tooltip';
import { st, classes } from './tooltip.st.css';

export const TooltipProvider: React.FC<RadixTooltip.TooltipProviderProps> = (props) => (
    <RadixTooltip.Provider {...props} />
);

export const Tooltip: React.FC<RadixTooltip.TooltipProps> = (props) => (
    <RadixTooltip.Root {...props} className={st(classes.root, props.className)} />
);

export const TooltipTrigger: React.FC<RadixTooltip.TooltipTriggerProps> = (props) => (
    <RadixTooltip.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const TooltipPortal: React.FC<RadixTooltip.TooltipPortalProps> = (props) => (
    <RadixTooltip.Portal {...props} className={st(classes.portal, props.className)} />
);

export const TooltipContent: React.FC<RadixTooltip.TooltipContentProps> = (props) => (
    <RadixTooltip.Content {...props} className={st(classes.content, props.className)} />
);

export const TooltipArrow: React.FC<RadixTooltip.TooltipArrowProps> = (props) => (
    <RadixTooltip.Arrow {...props} className={st(classes.arrow, props.className)} />
);

/* 
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger />
      <Tooltip.Portal>
        <Tooltip.Content>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
*/
