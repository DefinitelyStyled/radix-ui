import React from 'react';
import { classes } from './scroll-area-demo.st.css';
import {
    ScrollArea,
    ScrollAreaCorner,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaViewport,
} from '../components/scroll-area/scroll-area';

interface ScrollAreaDemoProps {
    className?: string;
}

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const ScrollAreaDemo: React.FunctionComponent<ScrollAreaDemoProps> = () => (
    <ScrollArea>
        <ScrollAreaViewport>
            <div style={{ padding: '15px 20px' }}>
                <div className={classes.text}>Tags</div>
                {TAGS.map((tag) => (
                    <div className={classes.tag} key={tag}>
                        {tag}
                    </div>
                ))}
            </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
    </ScrollArea>
);
export default ScrollAreaDemo;
