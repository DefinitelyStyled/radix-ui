import React from 'react';
import * as RadixHoverCard from '@radix-ui/react-hover-card';
import { st, classes } from './hover-card.st.css';

export const HoverCard: React.FC<RadixHoverCard.HoverCardProps> = (props) => (
    <RadixHoverCard.Root {...props} />
);

export const HoverCardTrigger: typeof RadixHoverCard.Trigger = React.forwardRef(
    function HoverCardTrigger(props, forwardRef) {
        return (
            <RadixHoverCard.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const HoverCardPortal: React.FC<RadixHoverCard.HoverCardPortalProps> = (props) => (
    <RadixHoverCard.Portal {...props} className={st(classes.portal, props.className)} />
);

export const HoverCardContent: typeof RadixHoverCard.Content = React.forwardRef(
    function HoverCardContent(props, forwardRef) {
        return (
            <RadixHoverCard.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

export const HoverCardArrow: typeof RadixHoverCard.Arrow = React.forwardRef(function HoverCardArrow(
    props,
    forwardRef
) {
    return (
        <RadixHoverCard.Arrow
            ref={forwardRef}
            {...props}
            className={st(classes.arrow, props.className)}
        />
    );
});

/* 
  <HoverCard.Root>
    <HoverCard.Trigger />
    <HoverCard.Portal>
      <HoverCard.Content>
        <HoverCard.Arrow />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
*/
