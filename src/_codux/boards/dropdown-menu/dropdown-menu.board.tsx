import React from 'react';
import { createBoard } from '@wixc3/react-board';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuItemIndicator,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../../../components/dropdown-menu/dropdown-menu';

export default createBoard({
    name: 'DropdownMenu',
    Board: () => {
        const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
        const [urlsChecked, setUrlsChecked] = React.useState(false);
        const [person, setPerson] = React.useState('pedro');

        return (
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>Drop</DropdownMenuTrigger>

                    <DropdownMenuContent sideOffset={5}>
                        <DropdownMenuItem>New Tab</DropdownMenuItem>
                        <DropdownMenuItem>New Window</DropdownMenuItem>
                        <DropdownMenuItem disabled>New Private Window</DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                                <DropdownMenuItem>Save Page As…</DropdownMenuItem>
                                <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                                <DropdownMenuItem>Name Window…</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={bookmarksChecked}
                            onCheckedChange={setBookmarksChecked}
                        >
                            <DropdownMenuItemIndicator>X</DropdownMenuItemIndicator>
                            Show Bookmarks
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={urlsChecked}
                            onCheckedChange={setUrlsChecked}
                        >
                            <DropdownMenuItemIndicator>X</DropdownMenuItemIndicator>
                            Show Full URLs
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>People</DropdownMenuLabel>
                        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                            <DropdownMenuRadioItem value="pedro">
                                <DropdownMenuItemIndicator>X</DropdownMenuItemIndicator>
                                Pedro Duarte
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="colm">
                                <DropdownMenuItemIndicator>X</DropdownMenuItemIndicator>
                                Colm Tuite
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        );
    },
});
