import { createBoard } from '@wixc3/react-board';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogCancel,
    AlertDialogDescription,
} from '../../../components/alert-dialog/alert-dialog';

export default createBoard({
    name: 'AlertDialog',
    Board: () => (
        <AlertDialog defaultOpen={true}>
            <AlertDialogTrigger>Trigger!</AlertDialogTrigger>
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogTitle>Alert Title</AlertDialogTitle>
                <AlertDialogDescription>Alert description can go here.</AlertDialogDescription>
                <AlertDialogCancel>Cancel button</AlertDialogCancel>
            </AlertDialogContent>
        </AlertDialog>
    ),
    environmentProps: {
        canvasWidth: 338,
        canvasHeight: 228,
    },
});
