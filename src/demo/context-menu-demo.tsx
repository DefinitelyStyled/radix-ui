import React from 'react';
import { classes } from './context-menu-demo.st.css';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuItemIndicator,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '../components/context-menu/context-menu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

interface ContextMenuDemoProps {
    className?: string;
}

const ContextMenuDemo: React.FunctionComponent<ContextMenuDemoProps> = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <ContextMenu>
            <ContextMenuTrigger>Right click here.</ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuContent>
                    <ContextMenuItem>
                        Back <div className={classes.rightSlot}>⌘+[</div>
                    </ContextMenuItem>
                    <ContextMenuItem disabled>
                        Foward <div className={classes.rightSlot}>⌘+]</div>
                    </ContextMenuItem>
                    <ContextMenuItem>
                        Reload <div className={classes.rightSlot}>⌘+R</div>
                    </ContextMenuItem>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger>
                            More Tools
                            <div className={classes.rightSlot}>
                                <ChevronRightIcon />
                            </div>
                        </ContextMenuSubTrigger>
                        <ContextMenuPortal>
                            <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
                                <ContextMenuItem>
                                    Save Page As… <div className={classes.rightSlot}>⌘+S</div>
                                </ContextMenuItem>
                                <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                                <ContextMenuItem>Name Window…</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>Developer Tools</ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuPortal>
                    </ContextMenuSub>

                    <ContextMenuSeparator />

                    <ContextMenuCheckboxItem
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                    >
                        <ContextMenuItemIndicator>
                            <CheckIcon />
                        </ContextMenuItemIndicator>
                        Show Bookmarks <div className={classes.rightSlot}>⌘+B</div>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                        <ContextMenuItemIndicator>
                            <CheckIcon />
                        </ContextMenuItemIndicator>
                        Show Full URLs
                    </ContextMenuCheckboxItem>

                    <ContextMenuSeparator />

                    <ContextMenuLabel>People</ContextMenuLabel>
                    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                        <ContextMenuRadioItem value="pedro">
                            <ContextMenuItemIndicator>
                                <DotFilledIcon />
                            </ContextMenuItemIndicator>
                            Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="colm">
                            <ContextMenuItemIndicator>
                                <DotFilledIcon />
                            </ContextMenuItemIndicator>
                            Colm Tuite
                        </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenuPortal>
        </ContextMenu>
    );
};

export default ContextMenuDemo;
