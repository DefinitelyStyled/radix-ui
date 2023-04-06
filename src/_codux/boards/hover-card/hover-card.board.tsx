import { createBoard } from '@wixc3/react-board';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '../../../components/hover-card/hover-card';

export default createBoard({
    name: 'HoverCard',
    Board: () => (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
                    <img
                        src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                        width={50}
                    />
                </a>
            </HoverCardTrigger>
            <HoverCardContent sideOffset={5}>
                <div>
                    <img
                        src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                        width={250}
                    />
                    <div>Some text goes here.</div>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
});
