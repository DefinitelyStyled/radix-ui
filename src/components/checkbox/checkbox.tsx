import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { st, classes } from './checkbox.st.css';

export const Checkbox: React.FC<RadixCheckbox.CheckboxProps> = (props) => (
    <RadixCheckbox.Root {...props} className={st(classes.root, props.className)} />
);

export const CheckboxIndeicator: React.FC<RadixCheckbox.CheckboxIndicatorProps> = (props) => (
    <RadixCheckbox.CheckboxIndicator
        {...props}
        className={st(classes.indicator, props.className)}
    />
);

/* 
<Checkbox.Root>
    <Checkbox.Indicator />
</Checkbox.Root>
*/
