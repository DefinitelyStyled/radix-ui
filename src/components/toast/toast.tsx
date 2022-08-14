import React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { st, classes } from './toast.st.css';

export const ToastProvider: React.FC<RadixToast.ToastProviderProps> = (props) => (
    <RadixToast.Provider {...props} />
);

export const Toast: typeof RadixToast.Root = React.forwardRef(function Toast(props, forwardRef) {
    return (
        <RadixToast.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const ToastViewport: typeof RadixToast.Viewport = React.forwardRef(function ToastViewport(
    props,
    forwardRef
) {
    return (
        <RadixToast.Viewport
            ref={forwardRef}
            {...props}
            className={st(classes.viewport, props.className)}
        />
    );
});

export const ToastTitle: typeof RadixToast.Title = React.forwardRef(function ToastTitle(
    props,
    forwardRef
) {
    return (
        <RadixToast.Title
            ref={forwardRef}
            {...props}
            className={st(classes.title, props.className)}
        />
    );
});

export const ToastDescription: typeof RadixToast.Description = React.forwardRef(
    function ToastDescription(props, forwardRef) {
        return (
            <RadixToast.Description
                ref={forwardRef}
                {...props}
                className={st(classes.description, props.className)}
            />
        );
    }
);

export const ToastAction: typeof RadixToast.Action = React.forwardRef(function ToastAction(
    props,
    forwardRef
) {
    return (
        <RadixToast.Action
            ref={forwardRef}
            {...props}
            className={st(classes.action, props.className)}
        />
    );
});

export const ToastClose: typeof RadixToast.Close = React.forwardRef(function ToastClose(
    props,
    forwardRef
) {
    return (
        <RadixToast.Close
            ref={forwardRef}
            {...props}
            className={st(classes.close, props.className)}
        />
    );
});

/* 
  <Toast.Provider>
    <Toast.Root>
      <Toast.Title />
      <Toast.Description />
      <Toast.Action />
      <Toast.Close />
    </Toast.Root>

    <Toast.Viewport />
  </Toast.Provider>
*/
