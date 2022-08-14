import React from 'react';
import * as RadixToggle from '@radix-ui/react-toggle';
import { st, classes } from './toggle.st.css';

export const Toggle: typeof RadixToggle.Root = React.forwardRef(function Toggle(props, forwardRef) {
    return (
        <RadixToggle.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

/* 
  <Toggle.Root />
*/
