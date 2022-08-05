import type React from 'react';
import * as RadixToolbar from '@radix-ui/react-toolbar';
import { st, classes } from '../components/toolbar/toolbar.st.css';
// import { classes as variantClasses } from './components/toolbar/toolbar.variant.st.css';

import {
    StrikethroughIcon,
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    FontBoldIcon,
    FontItalicIcon,
} from '@radix-ui/react-icons';
import {
    ToolbarLink,
    ToolbarRoot,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
} from '../components/toolbar/toolbar.st';

export interface ToolbarProps {
    className?: string;
}

export const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
    return (
        <ToolbarRoot className={st(classes.root, className)} aria-label="Formatting options">
            <ToolbarToggleGroup
                type="multiple"
                className={classes.toggleGroup}
                aria-label="Text formatting"
            >
                <ToolbarToggleItem value="bold" className={classes.toggleItem} aria-label="Bold">
                    <FontBoldIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                    value="italic"
                    className={classes.toggleItem}
                    aria-label="Italic"
                >
                    <FontItalicIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                    value="strikethrough"
                    className={classes.toggleItem}
                    aria-label="Strike through"
                >
                    <StrikethroughIcon />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator className={classes.separator} />
            <ToolbarToggleGroup
                type="single"
                defaultValue="center"
                className={classes.toggleGroup}
                aria-label="Text alignment"
            >
                <ToolbarToggleItem
                    value="left"
                    className={classes.toggleItem}
                    aria-label="Left aligned"
                >
                    <TextAlignLeftIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                    value="center"
                    className={classes.toggleItem}
                    aria-label="Center aligned"
                >
                    <TextAlignCenterIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem
                    value="right"
                    className={classes.toggleItem}
                    aria-label="Right aligned"
                >
                    <TextAlignRightIcon />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator className={classes.separator} />
            {/* <RadixToolbar.Link href="#" target="_blank" css={{ marginRight: 10 }}> */}
            <ToolbarLink href="#" className={classes.link}>
                Edited 2 hours ago
            </ToolbarLink>
            {/* <RadixToolbar.Button css={{ marginLeft: 'auto' }}>Share</RadixToolbar.Button> */}
            <RadixToolbar.Button className={classes.button}>Share</RadixToolbar.Button>
        </ToolbarRoot>
    );
};
