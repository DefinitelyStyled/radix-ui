import { createBoard } from '@wixc3/react-board';
import { AlertDialogDemo } from '../../../demo/alert-dialog-demo';

export default createBoard({
    name: 'AlertDialog',
    Board: () => <AlertDialogDemo />
});
