import { createBoard } from '@wixc3/react-board';
import ContextMenuDemo from '../../../demo/context-menu-demo';

export default createBoard({
    name: 'ContextMenu',
    Board: () => <ContextMenuDemo />,
    environmentProps: {
        windowBackgroundColor: '#c5c5c5',
    },
});
