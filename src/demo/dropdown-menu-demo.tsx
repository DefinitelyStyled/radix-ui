import React from 'react';
import { classes } from './dropdown-menu-demo.st.css';
import {
    DropdownMenu,
    DropdownMenuArrow,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../components/dropdown-menu/dropdown-menu';
import {
    CheckIcon,
    ChevronRightIcon,
    DotFilledIcon,
    HamburgerMenuIcon,
} from '@radix-ui/react-icons';

interface DropdownMenuDemoProps {
    className?: string;
}

const DropdownMenuDemo: React.FunctionComponent<DropdownMenuDemoProps> = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={classes.iconButton} aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                        New Tab <div className={classes.rightSlot}>⌘+T</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        New Window <div className={classes.rightSlot}>⌘+N</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        New Private Window <div className={classes.rightSlot}>⇧+⌘+N</div>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            More Tools
                            <div className={classes.rightSlot}>
                                <ChevronRightIcon />
                            </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                                <DropdownMenuItem>
                                    Save Page As… <div className={classes.rightSlot}>⌘+S</div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                                <DropdownMenuItem>Name Window…</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSeparator />

                    <DropdownMenuCheckboxItem
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                    >
                        <DropdownMenuItemIndicator>
                            <CheckIcon />
                        </DropdownMenuItemIndicator>
                        Show Bookmarks <div className={classes.rightSlot}>⌘+B</div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}
                    >
                        <DropdownMenuItemIndicator>
                            <CheckIcon />
                        </DropdownMenuItemIndicator>
                        Show Full URLs
                    </DropdownMenuCheckboxItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuLabel>People</DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                        <DropdownMenuRadioItem value="pedro">
                            <DropdownMenuItemIndicator>
                                <DotFilledIcon />
                            </DropdownMenuItemIndicator>
                            Pedro Duarte
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="colm">
                            <DropdownMenuItemIndicator>
                                <DotFilledIcon />
                            </DropdownMenuItemIndicator>
                            Colm Tuite
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>

                    <DropdownMenuArrow />
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenu>
    );
};

export default DropdownMenuDemo;
