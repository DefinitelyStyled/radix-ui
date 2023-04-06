import type React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../components/alert-dialog/alert-dialog';
import { classes, st } from './alert-dialog-demo.st.css';

export const AlertDialogDemo: React.FC = () => (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <button className={st(classes.button, classes.violet)}>Delete account</button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                </AlertDialogDescription>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                    <AlertDialogCancel asChild>
                        <button className={st(classes.button, classes.mauve)}>Cancel</button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <button className={st(classes.button, classes.red)}>
                            Yes, delete account
                        </button>
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialogPortal>
    </AlertDialog>
);
