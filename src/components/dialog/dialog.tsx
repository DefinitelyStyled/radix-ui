import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { st, classes } from './dialog.st.css';

export const Dialog: React.FC<RadixDialog.DialogProps> = (props) => <RadixDialog.Root {...props} />;

export const DialogTrigger: typeof RadixDialog.Trigger = React.forwardRef(function DialogTrigger(
    props,
    forwardRef
) {
    return (
        <RadixDialog.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const DialogPortal: React.FC<RadixDialog.DialogPortalProps> = (props) => (
    <RadixDialog.Portal {...props} className={st(classes.portal, props.className)} />
);

export const DialogOverlay: typeof RadixDialog.Overlay = React.forwardRef(function DialogOverlay(
    props,
    forwardRef
) {
    return (
        <RadixDialog.Overlay
            ref={forwardRef}
            {...props}
            className={st(classes.overlay, props.className)}
        />
    );
});

export const DialogContent: typeof RadixDialog.Content = React.forwardRef(function DialogContent(
    props,
    forwardRef
) {
    return (
        <RadixDialog.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

export const DialogTitle: typeof RadixDialog.Title = React.forwardRef(function DialogTitle(
    props,
    forwardRef
) {
    return (
        <RadixDialog.Title
            ref={forwardRef}
            {...props}
            className={st(classes.title, props.className)}
        />
    );
});

export const DialogDescription: typeof RadixDialog.Description = React.forwardRef(
    function DialogDescription(props, forwardRef) {
        return (
            <RadixDialog.Description
                ref={forwardRef}
                {...props}
                className={st(classes.description, props.className)}
            />
        );
    }
);

export const DialogClose: typeof RadixDialog.Close = React.forwardRef(function DialogClose(
    props,
    forwardRef
) {
    return (
        <RadixDialog.Close
            ref={forwardRef}
            {...props}
            className={st(classes.close, props.className)}
        />
    );
});

/* 
  <Dialog.Root>
    <Dialog.Trigger />
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title />
        <Dialog.Description />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
*/
