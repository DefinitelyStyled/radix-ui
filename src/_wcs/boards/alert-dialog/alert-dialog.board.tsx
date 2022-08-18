import { createBoard } from '@wixc3/react-board';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogCancel, AlertDialogDescription,
} from '../../../components/alert-dialog/alert-dialog';
import { classes } from '../../../theme/theme.st.css';
import { classes as commonClasses } from '../../../common.st.css';

document.body.classList.add(classes.root, commonClasses.root);

export default createBoard({
    name: 'AlertDialog',
    Board: () => (
        <AlertDialog defaultOpen={true}>
            <AlertDialogTrigger>Trigger!</AlertDialogTrigger>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogTitle>ALERT!</AlertDialogTitle>
                x
                <AlertDialogDescription>
                    XXX
                </AlertDialogDescription>
                <AlertDialogCancel>OH NO THEY CANCELLED ME</AlertDialogCancel>
            </AlertDialogContent>
        </AlertDialog>
    ),
    environmentProps: {
        canvasWidth: 338,
        canvasHeight: 228,
    },
});
