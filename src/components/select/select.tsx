import * as RadixSelect from '@radix-ui/react-select';
import { st, classes } from './select.st.css';

export const Select: React.FC<RadixSelect.SelectProps> = (props) => (
    <RadixSelect.Root {...props} className={st(classes.root, props.className)} />
);

export const SelectTrigger: React.FC<RadixSelect.SelectTriggerProps> = (props) => (
    <RadixSelect.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const SelectValue: React.FC<RadixSelect.SelectValueProps> = (props) => (
    <RadixSelect.Value {...props} className={st(classes.value, props.className)} />
);

export const SelectIcon: React.FC<RadixSelect.SelectIconProps> = (props) => (
    <RadixSelect.Icon {...props} className={st(classes.icon, props.className)} />
);

export const SelectPortal: React.FC<RadixSelect.SelectPortalProps> = (props) => (
    <RadixSelect.Portal {...props} className={st(classes.portal, props.className)} />
);

export const SelectContent: React.FC<RadixSelect.SelectContentProps> = (props) => (
    <RadixSelect.Content {...props} className={st(classes.content, props.className)} />
);

export const SelectViewport: React.FC<RadixSelect.SelectViewportProps> = (props) => (
    <RadixSelect.Viewport {...props} className={st(classes.viewport, props.className)} />
);

export const SelectItem: React.FC<RadixSelect.SelectItemProps> = (props) => (
    <RadixSelect.Item {...props} className={st(classes.item, props.className)} />
);

export const SelectItemText: React.FC<RadixSelect.SelectItemTextProps> = (props) => (
    <RadixSelect.ItemText {...props} className={st(classes.itemText, props.className)} />
);

export const SelectItemIndicator: React.FC<RadixSelect.SelectItemIndicatorProps> = (props) => (
    <RadixSelect.ItemIndicator {...props} className={st(classes.itemIndicator, props.className)} />
);

export const SelectScrollUpButton: React.FC<RadixSelect.SelectScrollUpButtonProps> = (props) => (
    <RadixSelect.ScrollUpButton
        {...props}
        className={st(classes.scrollUpButton, props.className)}
    />
);

export const SelectScrollDownButton: React.FC<RadixSelect.SelectScrollDownButtonProps> = (
    props
) => (
    <RadixSelect.ScrollDownButton
        {...props}
        className={st(classes.scrollDownButton, props.className)}
    />
);

export const SelectGroup: React.FC<RadixSelect.SelectGroupProps> = (props) => (
    <RadixSelect.Group {...props} className={st(classes.group, props.className)} />
);

export const SelectLabel: React.FC<RadixSelect.SelectLabelProps> = (props) => (
    <RadixSelect.Label {...props} className={st(classes.label, props.className)} />
);

export const SelectSeparator: React.FC<RadixSelect.SelectSeparatorProps> = (props) => (
    <RadixSelect.Separator {...props} className={st(classes.separator, props.className)} />
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
