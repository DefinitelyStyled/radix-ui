import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { st, classes } from './tooltip.st.css';

export const TooltipProvider: React.FC<RadixTooltip.TooltipProviderProps> = (props) => (
    <RadixTooltip.Provider {...props} />
);

export const Tooltip: React.FC<RadixTooltip.TooltipProps> = (props) => (
    <RadixTooltip.Root {...props} />
);

export const TooltipTrigger: typeof RadixTooltip.Trigger = React.forwardRef(function TooltipTrigger(
    props,
    forwardRef
) {
    return (
        <RadixTooltip.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const TooltipPortal: React.FC<RadixTooltip.TooltipPortalProps> = (props) => (
    <RadixTooltip.Portal {...props} className={st(classes.portal, props.className)} />
);

export const TooltipContent: typeof RadixTooltip.Content = React.forwardRef(function TooltipContent(
    props,
    forwardRef
) {
    return (
        <RadixTooltip.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

export const TooltipArrow: typeof RadixTooltip.Arrow = React.forwardRef(function TooltipArrow(
    props,
    forwardRef
) {
    return (
        <RadixTooltip.Arrow
            ref={forwardRef}
            {...props}
            className={st(classes.arrow, props.className)}
        />
    );
});

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
