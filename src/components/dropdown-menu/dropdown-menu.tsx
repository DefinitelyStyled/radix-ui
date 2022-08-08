import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { st, classes } from './dropdown-menu.st.css';

export const DropdownMenu: React.FC<RadixDropdownMenu.DropdownMenuProps> = (props) => (
    <RadixDropdownMenu.Root {...props} className={st(classes.root, props.className)} />
);

export const DropdownMenuTrigger: React.FC<RadixDropdownMenu.DropdownMenuTriggerProps> = (
    props
) => <RadixDropdownMenu.Trigger {...props} className={st(classes.trigger, props.className)} />;

export const DropdownMenuPortal: React.FC<RadixDropdownMenu.DropdownMenuPortalProps> = (props) => (
    <RadixDropdownMenu.Portal {...props} className={st(classes.portal, props.className)} />
);

export const DropdownMenuContent: React.FC<RadixDropdownMenu.DropdownMenuContentProps> = (
    props
) => <RadixDropdownMenu.Content {...props} className={st(classes.content, props.className)} />;

export const DropdownMenuLabel: React.FC<RadixDropdownMenu.DropdownMenuLabelProps> = (props) => (
    <RadixDropdownMenu.Label {...props} className={st(classes.label, props.className)} />
);

export const DropdownMenuItem: React.FC<RadixDropdownMenu.DropdownMenuItemProps> = (props) => (
    <RadixDropdownMenu.Item {...props} className={st(classes.item, props.className)} />
);

export const DropdownMenuGroup: React.FC<RadixDropdownMenu.DropdownMenuGroupProps> = (props) => (
    <RadixDropdownMenu.Group {...props} className={st(classes.group, props.className)} />
);

export const DropdownMenuCheckboxItem: React.FC<RadixDropdownMenu.DropdownMenuCheckboxItemProps> = (
    props
) => (
    <RadixDropdownMenu.CheckboxItem
        {...props}
        className={st(classes.checkboxItem, props.className)}
    />
);

export const DropdownMenuItemIndicator: React.FC<
    RadixDropdownMenu.DropdownMenuItemIndicatorProps
> = (props) => (
    <RadixDropdownMenu.ItemIndicator
        {...props}
        className={st(classes.itemIndicator, props.className)}
    />
);

export const DropdownMenuRadioGroup: React.FC<RadixDropdownMenu.DropdownMenuRadioGroupProps> = (
    props
) => (
    <RadixDropdownMenu.RadioGroup {...props} className={st(classes.radioGroup, props.className)} />
);

export const DropdownMenuRadioItem: React.FC<RadixDropdownMenu.DropdownMenuRadioItemProps> = (
    props
) => <RadixDropdownMenu.RadioItem {...props} className={st(classes.radioItem, props.className)} />;

export const DropdownMenuSub: React.FC<RadixDropdownMenu.DropdownMenuSubProps> = (props) => (
    <RadixDropdownMenu.Sub {...props} className={st(classes.sub, props.className)} />
);

export const DropdownMenuSubTrigger: React.FC<RadixDropdownMenu.DropdownMenuSubTriggerProps> = (
    props
) => (
    <RadixDropdownMenu.SubTrigger {...props} className={st(classes.subTrigger, props.className)} />
);

export const DropdownMenuSubContent: React.FC<RadixDropdownMenu.DropdownMenuSubContentProps> = (
    props
) => (
    <RadixDropdownMenu.SubContent {...props} className={st(classes.subContent, props.className)} />
);

export const DropdownMenuSeparator: React.FC<RadixDropdownMenu.DropdownMenuSeparatorProps> = (
    props
) => <RadixDropdownMenu.Separator {...props} className={st(classes.separator, props.className)} />;

export const DropdownMenuArrow: React.FC<RadixDropdownMenu.DropdownMenuArrowProps> = (props) => (
    <RadixDropdownMenu.Arrow {...props} className={st(classes.arrow, props.className)} />
);

/* 
    <DropdownMenu.Root>
    <DropdownMenu.Trigger />

    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        <DropdownMenu.Label />
        <DropdownMenu.Item />

        <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.RadioGroup>
          <DropdownMenu.RadioItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger />
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent />
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
*/
