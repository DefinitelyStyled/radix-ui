import React from 'react';
import * as RadixMenubar from '@radix-ui/react-menubar';
import { st, classes } from './menubar.st.css';

export const Menubar: typeof RadixMenubar.Root = React.forwardRef(function Menubar(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const MenubarMenu: React.FC<RadixMenubar.MenubarMenuProps> = (props) => (
    <RadixMenubar.Menu {...props} />
);

export const MenubarTrigger: typeof RadixMenubar.Trigger = React.forwardRef(function MenubarTrigger(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const MenubarPortal = RadixMenubar.Portal;

export const MenubarContent: typeof RadixMenubar.Content = React.forwardRef(function MenubarPortal(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

export const MenubarLabel: typeof RadixMenubar.Label = React.forwardRef(function Label(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Label
            ref={forwardRef}
            {...props}
            className={st(classes.label, props.className)}
        />
    );
});

export const MenubarItem: typeof RadixMenubar.Item = React.forwardRef(function Item(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Item
            ref={forwardRef}
            {...props}
            className={st(classes.item, props.className)}
        />
    );
});

export const MenubarGroup: typeof RadixMenubar.Group = React.forwardRef(function Group(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Group
            ref={forwardRef}
            {...props}
            className={st(classes.group, props.className)}
        />
    );
});

export const MenubarCheckboxItem: typeof RadixMenubar.CheckboxItem = React.forwardRef(
    function CheckboxItem(props, forwardRef) {
        return (
            <RadixMenubar.CheckboxItem
                ref={forwardRef}
                {...props}
                className={st(classes.checkboxItem, props.className)}
            />
        );
    }
);

export const MenubarItemIndicator: typeof RadixMenubar.ItemIndicator = React.forwardRef(
    function ItemIndicator(props, forwardRef) {
        return (
            <RadixMenubar.ItemIndicator
                ref={forwardRef}
                {...props}
                className={st(classes.itemIndicator, props.className)}
            />
        );
    }
);

export const MenubarRadioGroup: typeof RadixMenubar.RadioGroup = React.forwardRef(
    function RadioGroup(props, forwardRef) {
        return (
            <RadixMenubar.RadioGroup
                ref={forwardRef}
                {...props}
                className={st(classes.radioGroup, props.className)}
            />
        );
    }
);

export const MenubarRadioItem: typeof RadixMenubar.RadioItem = React.forwardRef(function RadioItem(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.RadioItem
            ref={forwardRef}
            {...props}
            className={st(classes.radioItem, props.className)}
        />
    );
});

export const MenubarSub: React.FC<RadixMenubar.MenubarSubProps> = (props) => (
    <RadixMenubar.Sub {...props} />
);

export const MenubarSubTrigger: typeof RadixMenubar.SubTrigger = React.forwardRef(
    function SubTrigger(props, forwardRef) {
        return (
            <RadixMenubar.SubTrigger
                ref={forwardRef}
                {...props}
                className={st(classes.subTrigger, props.className)}
            />
        );
    }
);

export const MenubarSubContent: typeof RadixMenubar.SubContent = React.forwardRef(
    function SubContent(props, forwardRef) {
        return (
            <RadixMenubar.SubContent
                ref={forwardRef}
                {...props}
                className={st(classes.subContent, props.className)}
            />
        );
    }
);

export const MenubarSeparator: typeof RadixMenubar.Separator = React.forwardRef(function Separator(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Separator
            ref={forwardRef}
            {...props}
            className={st(classes.separator, props.className)}
        />
    );
});

export const MenubarArrow: typeof RadixMenubar.Arrow = React.forwardRef(function Arrow(
    props,
    forwardRef
) {
    return (
        <RadixMenubar.Arrow
            ref={forwardRef}
            {...props}
            className={st(classes.arrow, props.className)}
        />
    );
});

/* 
    <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger />
      <Menubar.Portal>
        <Menubar.Content>
          <Menubar.Label />
          <Menubar.Item />

          <Menubar.Group>
            <Menubar.Item />
          </Menubar.Group>

          <Menubar.CheckboxItem>
            <Menubar.ItemIndicator />
          </Menubar.CheckboxItem>

          <Menubar.RadioGroup>
            <Menubar.RadioItem>
              <Menubar.ItemIndicator />
            </Menubar.RadioItem>
          </Menubar.RadioGroup>

          <Menubar.Sub>
            <Menubar.SubTrigger />
            <Menubar.Portal>
              <Menubar.SubContent />
            </Menubar.Portal>
          </Menubar.Sub>

          <Menubar.Separator />
          <Menubar.Arrow />
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  </Menubar.Root>
*/
