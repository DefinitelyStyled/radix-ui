import * as RadixDialog from '@radix-ui/react-dialog';
import { st, classes } from './dialog.st.css';

export const Dialog: React.FC<RadixDialog.DialogProps> = (props) => (
    <RadixDialog.Root {...props} className={st(classes.root, props.className)} />
);
export const DialogTrigger: React.FC<RadixDialog.DialogTriggerProps> = (props) => (
    <RadixDialog.Trigger {...props} className={st(classes.trigger, props.className)} />
);
export const DialogPortal: React.FC<RadixDialog.DialogPortalProps> = (props) => (
    <RadixDialog.Portal {...props} className={st(classes.portal, props.className)} />
);
export const DialogOverlay: React.FC<RadixDialog.DialogOverlayProps> = (props) => (
    <RadixDialog.Overlay {...props} className={st(classes.overlay, props.className)} />
);
export const DialogContent: React.FC<RadixDialog.DialogContentProps> = (props) => (
    <RadixDialog.Content {...props} className={st(classes.content, props.className)} />
);
export const DialogTitle: React.FC<RadixDialog.DialogTitleProps> = (props) => (
    <RadixDialog.Title {...props} className={st(classes.title, props.className)} />
);
export const DialogDescription: React.FC<RadixDialog.DialogDescriptionProps> = (props) => (
    <RadixDialog.Description {...props} className={st(classes.description, props.className)} />
);
export const DialogClose: React.FC<RadixDialog.DialogCloseProps> = (props) => (
    <RadixDialog.Close {...props} className={st(classes.close, props.className)} />
);

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
