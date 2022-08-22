import { createBoard } from '@wixc3/react-board';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '../../../components/dialog/dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => (
        <Dialog>
            <DialogTrigger>Edit profile</DialogTrigger>
            <DialogContent>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you are done.
                </DialogDescription>
                <DialogClose>Save changes</DialogClose>
                <DialogClose>X</DialogClose>
            </DialogContent>
        </Dialog>
    ),
});
