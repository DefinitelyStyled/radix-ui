import React from 'react';
import { classes, st } from './dialog-demo.st.css';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from '../components/dialog/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface DialogDemoProps {
    className?: string;
}

const DialogDemo: React.FunctionComponent<DialogDemoProps> = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={st(classes.button, classes.violet)}>Edit profile</button>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when done.
                    </DialogDescription>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="name">
                            Name
                        </label>
                        <input className={classes.input} id="name" defaultValue="Pedro Duarte" />
                    </fieldset>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="username">
                            Username
                        </label>
                        <input className={classes.input} id="username" defaultValue="@peduarte" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                        <DialogClose asChild>
                            <button className={st(classes.button, classes.green)}>
                                Save changes
                            </button>
                        </DialogClose>
                    </div>
                    <DialogClose asChild>
                        <button className={classes.iconButton} aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </DialogClose>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
};

export default DialogDemo;
