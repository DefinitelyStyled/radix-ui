import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import { st, classes } from './label.st.css';

export const Label: typeof RadixLabel.Root = React.forwardRef(function Label(props, forwardRef) {
    return (
        <RadixLabel.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

/* 
<Label.Root />
*/
