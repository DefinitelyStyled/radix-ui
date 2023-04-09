import { createBoard } from '@wixc3/react-board';
import { KitchenSinkDemo } from '../../../demo/kitchen-sink-demo';

export default createBoard({
    name: 'KitchenSink',
    Board: () => <KitchenSinkDemo />,
    environmentProps: {
        windowHeight: 2859,
        canvasHeight: 2770,
    },
});
