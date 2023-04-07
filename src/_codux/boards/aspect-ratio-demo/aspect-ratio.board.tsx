import { createBoard } from '@wixc3/react-board';
import AspectRatioDemo from '../../../demo/aspect-ratio-demo';

export default createBoard({
    name: 'AspectRatio',
    Board: () => <AspectRatioDemo />,
    environmentProps: {
        canvasWidth: 450,
    },
});
