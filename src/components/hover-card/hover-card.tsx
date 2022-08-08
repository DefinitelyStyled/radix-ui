import * as RadixHoverCard from '@radix-ui/react-hover-card';
import { st, classes } from './hover-card.st.css';

export const HoverCard: React.FC<RadixHoverCard.HoverCardProps> = (props) => (
    <RadixHoverCard.Root {...props} className={st(classes.root, props.className)} />
);

export const HoverCardTrigger: React.FC<RadixHoverCard.HoverCardTriggerProps> = (props) => (
    <RadixHoverCard.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const HoverCardPortal: React.FC<RadixHoverCard.HoverCardPortalProps> = (props) => (
    <RadixHoverCard.Portal {...props} className={st(classes.portal, props.className)} />
);

export const HoverCardContent: React.FC<RadixHoverCard.HoverCardContentProps> = (props) => (
    <RadixHoverCard.Content {...props} className={st(classes.content, props.className)} />
);

export const HoverCardArrow: React.FC<RadixHoverCard.HoverCardArrowProps> = (props) => (
    <RadixHoverCard.Arrow {...props} className={st(classes.arrow, props.className)} />
);

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
