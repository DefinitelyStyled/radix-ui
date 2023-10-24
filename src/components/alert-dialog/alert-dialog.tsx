import React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import { st, classes } from './alert-dialog.st.css';

export const AlertDialog: typeof RadixAlertDialog.Root = function AlertDialog(props) {
    return <RadixAlertDialog.Root {...props} />;
};

export const AlertDialogTrigger: typeof RadixAlertDialog.Trigger = React.forwardRef(
    function AlertDialogTrigger(props, forwardRef) {
        return (
            <RadixAlertDialog.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const AlertDialogPortal = RadixAlertDialog.Portal;

export const AlertDialogOverlay: typeof RadixAlertDialog.Overlay = React.forwardRef(
    function AlertDialogOverlay(props, forwardRef) {
        return (
            <RadixAlertDialog.Overlay
                ref={forwardRef}
                {...props}
                className={st(classes.overlay, props.className)}
            />
        );
    }
);

export const AlertDialogContent: typeof RadixAlertDialog.Content = React.forwardRef(
    function AlertDialogContent(props, forwardRef) {
        return (
            <RadixAlertDialog.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

export const AlertDialogCancel: typeof RadixAlertDialog.Cancel = React.forwardRef(
    function AlertDialogCancel(props, forwardRef) {
        return (
            <RadixAlertDialog.Cancel
                ref={forwardRef}
                {...props}
                className={st(classes.cancel, props.className)}
            />
        );
    }
);

export const AlertDialogAction: typeof RadixAlertDialog.Action = React.forwardRef(
    function AlertDialogAction(props, forwardRef) {
        return (
            <RadixAlertDialog.Action
                ref={forwardRef}
                {...props}
                className={st(classes.action, props.className)}
            />
        );
    }
);

export const AlertDialogTitle: typeof RadixAlertDialog.Title = React.forwardRef(
    function AlertDialogTitle(props, forwardRef) {
        return (
            <RadixAlertDialog.Title
                ref={forwardRef}
                {...props}
                className={st(classes.title, props.className)}
            />
        );
    }
);

export const AlertDialogDescription: typeof RadixAlertDialog.Description = React.forwardRef(
    function AlertDialogDescription(props, forwardRef) {
        return (
            <RadixAlertDialog.Description
                ref={forwardRef}
                {...props}
                className={st(classes.description, props.className)}
            />
        );
    }
);

/*
<AlertDialog.Root>
    <AlertDialog.Trigger />
    <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
            <AlertDialog.Title />
            <AlertDialog.Description />
            <AlertDialog.Cancel />
            <AlertDialog.Action />
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>
*/
