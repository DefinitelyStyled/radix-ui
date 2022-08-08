import * as RadixPopover from '@radix-ui/react-popover';
import { st, classes } from './popover.st.css';

export const Popover: React.FC<RadixPopover.PopoverProps> = (props) => (
    <RadixPopover.Root {...props} className={st(classes.root, props.className)} />
);

export const PopoverTrigger: React.FC<RadixPopover.PopoverTriggerProps> = (props) => (
    <RadixPopover.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const PopoverAnchor: React.FC<RadixPopover.PopoverAnchorProps> = (props) => (
    <RadixPopover.Anchor {...props} className={st(classes.anchor, props.className)} />
);

export const PopoverPortal: React.FC<RadixPopover.PopoverPortalProps> = (props) => (
    <RadixPopover.Portal {...props} className={st(classes.portal, props.className)} />
);

export const PopoverContent: React.FC<RadixPopover.PopoverContentProps> = (props) => (
    <RadixPopover.Content {...props} className={st(classes.content, props.className)} />
);

export const PopoverArrow: React.FC<RadixPopover.PopoverArrowProps> = (props) => (
    <RadixPopover.Arrow {...props} className={st(classes.arrow, props.className)} />
);

export const PopoverClose: React.FC<RadixPopover.PopoverCloseProps> = (props) => (
    <RadixPopover.Close {...props} className={st(classes.close, props.className)} />
);

/* 
  <Popover.Root>
    <Popover.Trigger />
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
*/
