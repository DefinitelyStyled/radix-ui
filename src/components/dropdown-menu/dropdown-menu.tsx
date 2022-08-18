import React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { st, classes } from './dropdown-menu.st.css';

export const DropdownMenu: React.FC<RadixDropdownMenu.DropdownMenuProps> = (props) => (
    <RadixDropdownMenu.Root {...props} />
);

export const DropdownMenuTrigger: typeof RadixDropdownMenu.Trigger = React.forwardRef(
    function DropdownMenuTrigger(props, forwardRef) {
        return (
            <RadixDropdownMenu.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const DropdownMenuPortal: React.FC<RadixDropdownMenu.DropdownMenuPortalProps> = (props) => (
    <RadixDropdownMenu.Portal {...props} className={st(classes.portal, props.className)} />
);

export const DropdownMenuContent: typeof RadixDropdownMenu.Content = React.forwardRef(
    function DropdownMenuContent(props, forwardRef) {
        return (
            <RadixDropdownMenu.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

export const DropdownMenuLabel: typeof RadixDropdownMenu.Label = React.forwardRef(
    function DropdownMenuLabel(props, forwardRef) {
        return (
            <RadixDropdownMenu.Label
                ref={forwardRef}
                {...props}
                className={st(classes.label, props.className)}
            />
        );
    }
);

export const DropdownMenuItem: typeof RadixDropdownMenu.Item = React.forwardRef(
    function DropdownMenuItem(props, forwardRef) {
        return (
            <RadixDropdownMenu.Item
                ref={forwardRef}
                {...props}
                className={st(classes.item, props.className)}
            />
        );
    }
);

export const DropdownMenuGroup: typeof RadixDropdownMenu.Group = React.forwardRef(
    function DropdownMenuGroup(props, forwardRef) {
        return (
            <RadixDropdownMenu.Group
                ref={forwardRef}
                {...props}
                className={st(classes.group, props.className)}
            />
        );
    }
);

export const DropdownMenuCheckboxItem: typeof RadixDropdownMenu.CheckboxItem = React.forwardRef(
    function DropdownMenuCheckboxItem(props, forwardRef) {
        return (
            <RadixDropdownMenu.CheckboxItem
                ref={forwardRef}
                {...props}
                className={st(classes.checkboxItem, props.className)}
            />
        );
    }
);

export const DropdownMenuItemIndicator: typeof RadixDropdownMenu.ItemIndicator = React.forwardRef(
    function DropdownMenuItemIndicator(props, forwardRef) {
        return (
            <RadixDropdownMenu.ItemIndicator
                ref={forwardRef}
                {...props}
                className={st(classes.itemIndicator, props.className)}
            />
        );
    }
);

export const DropdownMenuRadioGroup: typeof RadixDropdownMenu.RadioGroup = React.forwardRef(
    function DropdownMenuRadioGroup(props, forwardRef) {
        return (
            <RadixDropdownMenu.RadioGroup
                ref={forwardRef}
                {...props}
                className={st(classes.radioGroup, props.className)}
            />
        );
    }
);

export const DropdownMenuRadioItem: typeof RadixDropdownMenu.RadioItem = React.forwardRef(
    function DropdownMenuRadioItem(props, forwardRef) {
        return (
            <RadixDropdownMenu.RadioItem
                ref={forwardRef}
                {...props}
                className={st(classes.radioItem, props.className)}
            />
        );
    }
);

export const DropdownMenuSub: React.FC<RadixDropdownMenu.DropdownMenuSubProps> = (props) => (
    <RadixDropdownMenu.Sub {...props} />
);

export const DropdownMenuSubTrigger: typeof RadixDropdownMenu.SubTrigger = React.forwardRef(
    function DropdownMenuSubTrigger(props, forwardRef) {
        return (
            <RadixDropdownMenu.SubTrigger
                ref={forwardRef}
                {...props}
                className={st(classes.subTrigger, props.className)}
            />
        );
    }
);

export const DropdownMenuSubContent: typeof RadixDropdownMenu.SubContent = React.forwardRef(
    function DropdownMenuSubContent(props, forwardRef) {
        return (
            <RadixDropdownMenu.SubContent
                ref={forwardRef}
                {...props}
                className={st(classes.subContent, props.className)}
            />
        );
    }
);

export const DropdownMenuSeparator: typeof RadixDropdownMenu.Separator = React.forwardRef(
    function DropdownMenuSeparator(props, forwardRef) {
        return (
            <RadixDropdownMenu.Separator
                ref={forwardRef}
                {...props}
                className={st(classes.separator, props.className)}
            />
        );
    }
);

export const DropdownMenuArrow: typeof RadixDropdownMenu.Arrow = React.forwardRef(
    function DropdownMenuArrow(props, forwardRef) {
        return (
            <RadixDropdownMenu.Arrow
                ref={forwardRef}
                {...props}
                className={st(classes.arrow, props.className)}
            />
        );
    }
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
