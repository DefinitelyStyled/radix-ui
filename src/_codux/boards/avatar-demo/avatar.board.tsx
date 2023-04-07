import { createBoard } from '@wixc3/react-board';
import { AvatarDemo } from '../../../demo/avatar-demo';

export default createBoard({
    name: 'Avatar',
    Board: () => <AvatarDemo />,
    environmentProps: {
        windowBackgroundColor: '#dcdcdc',
    },
});
