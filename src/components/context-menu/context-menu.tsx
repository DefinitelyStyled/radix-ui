import React from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { st, classes } from './context-menu.st.css';

export const ContextMenu: React.FC<RadixContextMenu.ContextMenuProps> = (props) => (
    <RadixContextMenu.Root {...props} className={st(classes.root, props.className)} />
);

export const ContextMenuTrigger: typeof RadixContextMenu.Trigger = React.forwardRef(
    function ContextMenuTrigger(props, forwardRef) {
        return (
            <RadixContextMenu.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const ContextMenuPortal: React.FC<RadixContextMenu.ContextMenuPortalProps> = (props) => (
    <RadixContextMenu.Portal {...props} className={st(classes.portal, props.className)} />
);

export const ContextMenuContent: typeof RadixContextMenu.Content = React.forwardRef(
    function ContextMenuContent(props, forwardRef) {
        return (
            <RadixContextMenu.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

export const ContextMenuArrow: typeof RadixContextMenu.Arrow = React.forwardRef(
    function ContextMenuArrow(props, forwardRef) {
        return (
            <RadixContextMenu.Arrow
                ref={forwardRef}
                {...props}
                className={st(classes.arrow, props.className)}
            />
        );
    }
);

export const ContextMenuItem: typeof RadixContextMenu.Item = React.forwardRef(
    function ContextMenuItem(props, forwardRef) {
        return (
            <RadixContextMenu.Item
                ref={forwardRef}
                {...props}
                className={st(classes.item, props.className)}
            />
        );
    }
);

export const ContextMenuGroup: typeof RadixContextMenu.Group = React.forwardRef(
    function ContextMenuGroup(props, forwardRef) {
        return (
            <RadixContextMenu.Group
                ref={forwardRef}
                {...props}
                className={st(classes.group, props.className)}
            />
        );
    }
);

export const ContextMenuLabel: typeof RadixContextMenu.Label = React.forwardRef(
    function ContextMenuLabel(props, forwardRef) {
        return (
            <RadixContextMenu.Label
                ref={forwardRef}
                {...props}
                className={st(classes.label, props.className)}
            />
        );
    }
);

export const ContextMenuCheckboxItem: typeof RadixContextMenu.CheckboxItem = React.forwardRef(
    function ContextMenuCheckboxItem(props, forwardRef) {
        return (
            <RadixContextMenu.CheckboxItem
                ref={forwardRef}
                {...props}
                className={st(classes.checkboxItem, props.className)}
            />
        );
    }
);

export const ContextMenuRadioGroup: typeof RadixContextMenu.RadioGroup = React.forwardRef(
    function ContextMenuRadioGroup(props, forwardRef) {
        return (
            <RadixContextMenu.RadioGroup
                ref={forwardRef}
                {...props}
                className={st(classes.radioGroup, props.className)}
            />
        );
    }
);

export const ContextMenuRadioItem: typeof RadixContextMenu.RadioItem = React.forwardRef(
    function ContextMenuRadioItem(props, forwardRef) {
        return (
            <RadixContextMenu.RadioItem
                ref={forwardRef}
                {...props}
                className={st(classes.radioItem, props.className)}
            />
        );
    }
);

export const ContextMenuItemIndicator: typeof RadixContextMenu.ItemIndicator = React.forwardRef(
    function ContextMenuItemIndicator(props, forwardRef) {
        return (
            <RadixContextMenu.ItemIndicator
                ref={forwardRef}
                {...props}
                className={st(classes.itemIndicator, props.className)}
            />
        );
    }
);

export const ContextMenuSeparator: typeof RadixContextMenu.Separator = React.forwardRef(
    function ContextMenuSeparator(props, forwardRef) {
        return (
            <RadixContextMenu.Separator
                ref={forwardRef}
                {...props}
                className={st(classes.separator, props.className)}
            />
        );
    }
);

export const ContextMenuSub: React.FC<RadixContextMenu.ContextMenuSubProps> = (props) => (
    <RadixContextMenu.Sub {...props} className={st(classes.sub, props.className)} />
);

export const ContextMenuSubTrigger: typeof RadixContextMenu.SubTrigger = React.forwardRef(
    function ContextMenuSubTrigger(props, forwardRef) {
        return (
            <RadixContextMenu.SubTrigger
                ref={forwardRef}
                {...props}
                className={st(classes.subTrigger, props.className)}
            />
        );
    }
);

export const ContextMenuSubContent: typeof RadixContextMenu.SubContent = React.forwardRef(
    function ContextMenuSubContent(props, forwardRef) {
        return (
            <RadixContextMenu.SubContent
                ref={forwardRef}
                {...props}
                className={st(classes.subContent, props.className)}
            />
        );
    }
);

/* 
<ContextMenu.Root>
    <ContextMenu.Trigger />

    <Contextmenu.Portal>
        <ContextMenu.Content>
            <ContextMenu.Label />
            <ContextMenu.Item />

            <ContextMenu.Group>
            <ContextMenu.Item />
            </ContextMenu.Group>

            <ContextMenu.CheckboxItem>
            <ContextMenu.ItemIndicator />
            </ContextMenu.CheckboxItem>

            <ContextMenu.RadioGroup>
            <ContextMenu.RadioItem>
                <ContextMenu.ItemIndicator />
            </ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>

            <ContextMenu.Sub>
                <ContextMenu.SubTrigger />
                    <ContextMenu.Portal>
                        <ContextMenu.SubContent />
                    </ContextMenu.Portal>
                </ContextMenu.Sub>

            <ContextMenu.Separator />
        </ContextMenu.Content>
    </Contextmenu.Portal>
</ContextMenu.Root>
*/
