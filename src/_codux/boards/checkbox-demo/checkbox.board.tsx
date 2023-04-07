import { createBoard } from '@wixc3/react-board';
import CheckboxDemo from '../../../demo/checkbox-demo';

export default createBoard({
    name: 'Checkbox',
    Board: () => <CheckboxDemo />,
    environmentProps: {
        windowBackgroundColor: '#bfbfbf',
    },
});
