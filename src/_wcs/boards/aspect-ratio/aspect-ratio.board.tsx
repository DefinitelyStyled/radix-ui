import { createBoard } from '@wixc3/react-board';
import { AspectRatio } from '../../../components/aspect-ratio/aspect-ratio';
import { classes } from '../../../theme/theme.st.css';
import { classes as commonClasses } from '../../../common.st.css';

document.body.classList.add(classes.root, commonClasses.root);

export default createBoard({
    name: 'AspectRatio',
    Board: () => (
        <div>
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                    alt="Landscape photo by Tobias Tullius"
                />
            </AspectRatio>
        </div>
    ),
    environmentProps: {
        canvasWidth: 430,
    },
});
