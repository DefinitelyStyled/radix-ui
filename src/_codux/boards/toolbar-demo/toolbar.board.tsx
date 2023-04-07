import { createBoard } from '@wixc3/react-board';
import { ToolbarDemo } from '../../../demo/toolbar-demo';

export default createBoard({
    name: 'Toolbar',
    Board: () => <ToolbarDemo />
});
