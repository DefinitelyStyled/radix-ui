import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { st, classes } from './select.st.css';

export const Select: React.FC<RadixSelect.SelectProps> = (props) => <RadixSelect.Root {...props} />;

export const SelectTrigger: typeof RadixSelect.Trigger = React.forwardRef(function SelectTrigger(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const SelectValue: typeof RadixSelect.Value = React.forwardRef(function SelectValue(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Value
            ref={forwardRef}
            {...props}
            className={st(classes.value, props.className)}
        />
    );
});

export const SelectIcon: typeof RadixSelect.Icon = React.forwardRef(function SelectIcon(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Icon
            ref={forwardRef}
            {...props}
            className={st(classes.icon, props.className)}
        />
    );
});

export const SelectPortal: React.FC<RadixSelect.SelectPortalProps> = (props) => (
    <RadixSelect.Portal {...props} className={st(classes.portal, props.className)} />
);

export const SelectContent: typeof RadixSelect.Content = React.forwardRef(function SelectContent(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

export const SelectViewport: typeof RadixSelect.Viewport = React.forwardRef(function SelectViewport(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Viewport
            ref={forwardRef}
            {...props}
            className={st(classes.viewport, props.className)}
        />
    );
});

export const SelectItem: typeof RadixSelect.Item = React.forwardRef(function SelectItem(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Item
            ref={forwardRef}
            {...props}
            className={st(classes.item, props.className)}
        />
    );
});

export const SelectItemText: typeof RadixSelect.ItemText = React.forwardRef(function SelectItemText(
    props,
    forwardRef
) {
    return (
        <RadixSelect.ItemText
            ref={forwardRef}
            {...props}
            className={st(classes.itemText, props.className)}
        />
    );
});

export const SelectItemIndicator: typeof RadixSelect.ItemIndicator = React.forwardRef(
    function SelectItemIndicator(props, forwardRef) {
        return (
            <RadixSelect.ItemIndicator
                ref={forwardRef}
                {...props}
                className={st(classes.itemIndicator, props.className)}
            />
        );
    }
);

export const SelectScrollUpButton: typeof RadixSelect.ScrollUpButton = React.forwardRef(
    function SelectScrollUpButton(props, forwardRef) {
        return (
            <RadixSelect.ScrollUpButton
                ref={forwardRef}
                {...props}
                className={st(classes.scrollUpButton, props.className)}
            />
        );
    }
);

export const SelectScrollDownButton: typeof RadixSelect.ScrollDownButton = React.forwardRef(
    function SelectScrollDownButton(props, forwardRef) {
        return (
            <RadixSelect.ScrollDownButton
                ref={forwardRef}
                {...props}
                className={st(classes.scrollDownButton, props.className)}
            />
        );
    }
);

export const SelectGroup: typeof RadixSelect.Group = React.forwardRef(function SelectGroup(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Group
            ref={forwardRef}
            {...props}
            className={st(classes.group, props.className)}
        />
    );
});

export const SelectLabel: typeof RadixSelect.Label = React.forwardRef(function SelectLabel(
    props,
    forwardRef
) {
    return (
        <RadixSelect.Label
            ref={forwardRef}
            {...props}
            className={st(classes.label, props.className)}
        />
    );
});

export const SelectSeparator: typeof RadixSelect.Separator = React.forwardRef(
    function SelectSeparator(props, forwardRef) {
        return (
            <RadixSelect.Separator
                ref={forwardRef}
                {...props}
                className={st(classes.separator, props.className)}
            />
        );
    }
);

/* 
  <Select.Root>
    <Select.Trigger>
      <Select.Value />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item>
            <Select.ItemText />
            <Select.ItemIndicator />
          </Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
*/
