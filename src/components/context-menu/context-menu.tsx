import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { st, classes } from './context-menu.st.css';

export const ContextMenu: React.FC<RadixContextMenu.ContextMenuProps> = (props) => (
    <RadixContextMenu.Root {...props} className={st(classes.root, props.className)} />
);

export const ContextMenuTrigger: React.FC<RadixContextMenu.ContextMenuTriggerProps> = (props) => (
    <RadixContextMenu.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const ContextMenuPortal: React.FC<RadixContextMenu.ContextMenuPortalProps> = (props) => (
    <RadixContextMenu.Portal {...props} className={st(classes.portal, props.className)} />
);

export const ContextMenuContent: React.FC<RadixContextMenu.ContextMenuContentProps> = (props) => (
    <RadixContextMenu.Content {...props} className={st(classes.content, props.className)} />
);

export const ContextMenuArrow: React.FC<RadixContextMenu.ContextMenuArrowProps> = (props) => (
    <RadixContextMenu.Arrow {...props} className={st(classes.arrow, props.className)} />
);

export const ContextMenuItem: React.FC<RadixContextMenu.ContextMenuItemProps> = (props) => (
    <RadixContextMenu.Item {...props} className={st(classes.item, props.className)} />
);

export const ContextMenuGroup: React.FC<RadixContextMenu.ContextMenuGroupProps> = (props) => (
    <RadixContextMenu.Group {...props} className={st(classes.group, props.className)} />
);

export const ContextMenuLabel: React.FC<RadixContextMenu.ContextMenuLabelProps> = (props) => (
    <RadixContextMenu.Label {...props} className={st(classes.label, props.className)} />
);

export const ContextMenuCheckboxItem: React.FC<RadixContextMenu.ContextMenuCheckboxItemProps> = (
    props
) => (
    <RadixContextMenu.CheckboxItem
        {...props}
        className={st(classes.checkboxItem, props.className)}
    />
);

export const ContextMenuRadioGroup: React.FC<RadixContextMenu.ContextMenuRadioGroupProps> = (
    props
) => <RadixContextMenu.RadioGroup {...props} className={st(classes.radioGroup, props.className)} />;

export const ContextMenuRadioItem: React.FC<RadixContextMenu.ContextMenuRadioItemProps> = (
    props
) => <RadixContextMenu.RadioItem {...props} className={st(classes.radioItem, props.className)} />;

export const ContextMenuItemIndicator: React.FC<RadixContextMenu.ContextMenuItemIndicatorProps> = (
    props
) => (
    <RadixContextMenu.ItemIndicator
        {...props}
        className={st(classes.itemIndicator, props.className)}
    />
);

export const ContextMenuSeparator: React.FC<RadixContextMenu.ContextMenuSeparatorProps> = (
    props
) => <RadixContextMenu.Separator {...props} className={st(classes.separator, props.className)} />;

export const ContextMenuSub: React.FC<RadixContextMenu.ContextMenuSubProps> = (props) => (
    <RadixContextMenu.Sub {...props} className={st(classes.sub, props.className)} />
);

export const ContextMenuSubTrigger: React.FC<RadixContextMenu.ContextMenuSubTriggerProps> = (
    props
) => <RadixContextMenu.SubTrigger {...props} className={st(classes.subTrigger, props.className)} />;

export const ContextMenuSubContent: React.FC<RadixContextMenu.ContextMenuSubContentProps> = (
    props
) => <RadixContextMenu.SubContent {...props} className={st(classes.subContent, props.className)} />;

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
