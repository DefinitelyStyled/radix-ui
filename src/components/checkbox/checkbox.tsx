import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { st, classes } from './checkbox.st.css';

export const Checkbox: typeof RadixCheckbox.Root = React.forwardRef(function Checkbox(
    props,
    forwardRef
) {
    return (
        <RadixCheckbox.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const CheckboxIndicator: typeof RadixCheckbox.Indicator = React.forwardRef(function Checkbox(
    props,
    forwardRef
) {
    return (
        <RadixCheckbox.Indicator
            ref={forwardRef}
            {...props}
            className={st(classes.indicator, props.className)}
        />
    );
});

/* 
<Checkbox.Root>
    <Checkbox.Indicator />
</Checkbox.Root>
*/
