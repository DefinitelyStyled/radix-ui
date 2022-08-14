import React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { st, classes } from './radio-group.st.css';

export const RadioGroup: typeof RadixRadioGroup.Root = React.forwardRef(function RadioGroup(
    props,
    forwardRef
) {
    return (
        <RadixRadioGroup.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const RadioGroupItem: typeof RadixRadioGroup.Item = React.forwardRef(function RadioGroupItem(
    props,
    forwardRef
) {
    return (
        <RadixRadioGroup.Item
            ref={forwardRef}
            {...props}
            className={st(classes.item, props.className)}
        />
    );
});

export const RadioGroupIndicator: typeof RadixRadioGroup.Indicator = React.forwardRef(
    function RadioGroupIndicator(props, forwardRef) {
        return (
            <RadixRadioGroup.Indicator
                ref={forwardRef}
                {...props}
                className={st(classes.indicator, props.className)}
            />
        );
    }
);

/* 
  <RadioGroup.Root>
    <RadioGroup.Item>
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  </RadioGroup.Root>
*/
