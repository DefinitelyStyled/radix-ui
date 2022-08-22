import React from 'react';
import { createBoard } from '@wixc3/react-board';
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
} from '../../../components/context-menu/context-menu';

export default createBoard({
    name: 'ContextMenu',
    Board: () => {
        const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
        const [urlsChecked, setUrlsChecked] = React.useState(false);
        const [person, setPerson] = React.useState('pedro');

        return (
            <div>
                <ContextMenu>
                    <ContextMenuTrigger>
                        <p>Right click here.</p>
                    </ContextMenuTrigger>
                    <ContextMenuPortal>
                        <ContextMenuContent>
                            <ContextMenuItem>Back</ContextMenuItem>
                            <ContextMenuItem disabled>Foward</ContextMenuItem>
                            <ContextMenuItem>Reload</ContextMenuItem>
                            <ContextMenuSub>
                                <ContextMenuSubTrigger>More Tools {'>'}</ContextMenuSubTrigger>
                                <ContextMenuPortal>
                                    <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
                                        <ContextMenuItem>Save Page As…</ContextMenuItem>
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
                                <ContextMenuItemIndicator>X</ContextMenuItemIndicator>
                                Show Bookmarks
                            </ContextMenuCheckboxItem>
                            <ContextMenuCheckboxItem
                                checked={urlsChecked}
                                onCheckedChange={setUrlsChecked}
                            >
                                <ContextMenuItemIndicator>X</ContextMenuItemIndicator>
                                Show Full URLs
                            </ContextMenuCheckboxItem>
                            <ContextMenuSeparator />
                            <ContextMenuLabel>People</ContextMenuLabel>
                            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                                <ContextMenuRadioItem value="pedro">
                                    <ContextMenuItemIndicator>X</ContextMenuItemIndicator>
                                    Pedro Duarte
                                </ContextMenuRadioItem>
                                <ContextMenuRadioItem value="colm">
                                    <ContextMenuItemIndicator>X</ContextMenuItemIndicator>
                                    Colm Tuite
                                </ContextMenuRadioItem>
                            </ContextMenuRadioGroup>
                        </ContextMenuContent>
                    </ContextMenuPortal>
                </ContextMenu>
            </div>
        );
    },
});
