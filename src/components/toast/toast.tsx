import * as RadixToast from '@radix-ui/react-toast';
import { st, classes } from './toast.st.css';

export const ToastProvider: React.FC<RadixToast.ToastProviderProps> = (props) => (
    <RadixToast.Provider {...props} />
);

export const Toast: React.FC<RadixToast.ToastProps> = (props) => (
    <RadixToast.Root {...props} className={st(classes.root, props.className)} />
);

export const ToastViewport: React.FC<RadixToast.ToastViewportProps> = (props) => (
    <RadixToast.Viewport {...props} className={st(classes.viewport, props.className)} />
);

export const ToastTitle: React.FC<RadixToast.ToastTitleProps> = (props) => (
    <RadixToast.Title {...props} className={st(classes.title, props.className)} />
);

export const ToastDescription: React.FC<RadixToast.ToastDescriptionProps> = (props) => (
    <RadixToast.Description {...props} className={st(classes.description, props.className)} />
);

export const ToastAction: React.FC<RadixToast.ToastActionProps> = (props) => (
    <RadixToast.Action {...props} className={st(classes.action, props.className)} />
);

export const ToastClose: React.FC<RadixToast.ToastCloseProps> = (props) => (
    <RadixToast.Close {...props} className={st(classes.close, props.className)} />
);

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
