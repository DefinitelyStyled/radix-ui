import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { st, classes } from './switch.st.css';

export const Switch: typeof RadixSwitch.Root = React.forwardRef(function Switch(props, forwardRef) {
    return (
        <RadixSwitch.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const SwitchThumb: typeof RadixSwitch.Thumb = React.forwardRef(function SwitchThumb(
    props,
    forwardRef
) {
    return (
        <RadixSwitch.Thumb
            ref={forwardRef}
            {...props}
            className={st(classes.thumb, props.className)}
        />
    );
});

/* 
  <Switch.Root>
    <Switch.Thumb />
  </Switch.Root>
*/
