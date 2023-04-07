import { createBoard } from '@wixc3/react-board';
import { KitchenSinkDemo } from '../../../demo/kitchen-sink-demo';

export default createBoard({
    name: 'KitchenSink',
    Board: () => <KitchenSinkDemo />
});
