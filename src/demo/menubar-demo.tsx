import React from 'react';
import { classes } from './menubar-demo.st.css';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarItemIndicator,
    MenubarMenu,
    MenubarPortal,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '../components/menubar/menubar';

interface MenubarDemoProps {
    className?: string;
}

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

const MenubarDemo: React.FunctionComponent<MenubarDemoProps> = () => {
    const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarPortal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
                        <MenubarItem>
                            New Tab <div className={classes.rightSlot}>⌘ T</div>
                        </MenubarItem>
                        <MenubarItem>
                            New Window <div className={classes.rightSlot}>⌘ N</div>
                        </MenubarItem>
                        <MenubarItem disabled>New Incognito Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>
                                Share
                                <div className={classes.rightSlot}>
                                    <ChevronRightIcon />
                                </div>
                            </MenubarSubTrigger>
                            <MenubarPortal>
                                <MenubarSubContent alignOffset={-5}>
                                    <MenubarItem>Email Link</MenubarItem>
                                    <MenubarItem>Messages</MenubarItem>
                                    <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                            </MenubarPortal>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>
                            Print… <div className={classes.rightSlot}>⌘ P</div>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarPortal>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarPortal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
                        <MenubarItem>
                            Undo <div className={classes.rightSlot}>⌘ Z</div>
                        </MenubarItem>
                        <MenubarItem>
                            Redo <div className={classes.rightSlot}>⇧ ⌘ Z</div>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>
                                Find
                                <div className={classes.rightSlot}>
                                    <ChevronRightIcon />
                                </div>
                            </MenubarSubTrigger>

                            <MenubarPortal>
                                <MenubarSubContent alignOffset={-5}>
                                    <MenubarItem>Search the web…</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Find…</MenubarItem>
                                    <MenubarItem>Find Next</MenubarItem>
                                    <MenubarItem>Find Previous</MenubarItem>
                                </MenubarSubContent>
                            </MenubarPortal>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>Cut</MenubarItem>
                        <MenubarItem>Copy</MenubarItem>
                        <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                </MenubarPortal>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarPortal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
                        {CHECK_ITEMS.map((item) => (
                            <MenubarCheckboxItem
                                className={classes.inset}
                                key={item}
                                checked={checkedSelection.includes(item)}
                                onCheckedChange={() =>
                                    setCheckedSelection((current) =>
                                        current.includes(item)
                                            ? current.filter((el) => el !== item)
                                            : current.concat(item)
                                    )
                                }
                            >
                                <MenubarItemIndicator>
                                    <CheckIcon />
                                </MenubarItemIndicator>
                                {item}
                            </MenubarCheckboxItem>
                        ))}
                        <MenubarSeparator />
                        <MenubarItem className={classes.inset}>
                            Reload <div className={classes.rightSlot}>⌘ R</div>
                        </MenubarItem>
                        <MenubarItem className={classes.inset} disabled>
                            Force Reload <div className={classes.rightSlot}>⇧ ⌘ R</div>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className={classes.inset}>Toggle Fullscreen</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className={classes.inset}>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                </MenubarPortal>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarPortal>
                    <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
                        <MenubarRadioGroup value={radioSelection} onValueChange={setRadioSelection}>
                            {RADIO_ITEMS.map((item) => (
                                <MenubarRadioItem className={classes.inset} key={item} value={item}>
                                    <MenubarItemIndicator>
                                        <DotFilledIcon />
                                    </MenubarItemIndicator>
                                    {item}
                                </MenubarRadioItem>
                            ))}
                            <MenubarSeparator />
                            <MenubarItem className={classes.inset}>Edit…</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className={classes.inset}>Add Profile…</MenubarItem>
                        </MenubarRadioGroup>
                    </MenubarContent>
                </MenubarPortal>
            </MenubarMenu>
        </Menubar>
    );
};

export default MenubarDemo;
