import type React from 'react';
import * as RadixToolbar from '@radix-ui/react-toolbar';

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
    Toolbar,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem,
} from '../components/toolbar/toolbar';

export interface ToolbarProps {
    className?: string;
}

export const ToolbarDemo: React.FC<ToolbarProps> = ({ className }) => {
    return (
        <Toolbar className={className} aria-label="Formatting options">
            <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
                <ToolbarToggleItem value="bold" aria-label="Bold">
                    <FontBoldIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic" aria-label="Italic">
                    <FontItalicIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
                    <StrikethroughIcon />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
                <ToolbarToggleItem value="left" aria-label="Left aligned">
                    <TextAlignLeftIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="center" aria-label="Center aligned">
                    <TextAlignCenterIcon />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="right" aria-label="Right aligned">
                    <TextAlignRightIcon />
                </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarLink href="#">Edited 2 hours ago</ToolbarLink>
            <RadixToolbar.Button>Share</RadixToolbar.Button>
        </Toolbar>
    );
};
