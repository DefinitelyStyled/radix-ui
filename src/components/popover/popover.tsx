import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { st, classes } from './popover.st.css';

export const Popover: React.FC<RadixPopover.PopoverProps> = (props) => (
    <RadixPopover.Root {...props} className={st(classes.root, props.className)} />
);

export const PopoverTrigger: typeof RadixPopover.Trigger = React.forwardRef(function PopoverTrigger(
    props,
    forwardRef
) {
    return (
        <RadixPopover.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const PopoverAnchor: typeof RadixPopover.Anchor = React.forwardRef(function PopoverAnchor(
    props,
    forwardRef
) {
    return (
        <RadixPopover.Anchor
            ref={forwardRef}
            {...props}
            className={st(classes.anchor, props.className)}
        />
    );
});

export const PopoverPortal: React.FC<RadixPopover.PopoverPortalProps> = (props) => (
    <RadixPopover.Portal {...props} className={st(classes.portal, props.className)} />
);

export const PopoverContent: typeof RadixPopover.Content = React.forwardRef(function PopoverContent(
    props,
    forwardRef
) {
    return (
        <RadixPopover.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

export const PopoverArrow: typeof RadixPopover.Arrow = React.forwardRef(function PopoverArrow(
    props,
    forwardRef
) {
    return (
        <RadixPopover.Arrow
            ref={forwardRef}
            {...props}
            className={st(classes.arrow, props.className)}
        />
    );
});

export const PopoverClose: typeof RadixPopover.Close = React.forwardRef(function PopoverClose(
    props,
    forwardRef
) {
    return (
        <RadixPopover.Close
            ref={forwardRef}
            {...props}
            className={st(classes.close, props.className)}
        />
    );
});

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
