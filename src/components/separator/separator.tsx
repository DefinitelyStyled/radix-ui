import React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';
import { st, classes } from './separator.st.css';

export const Separator: typeof RadixSeparator.Root = React.forwardRef(function Separator(
    props,
    forwardRef
) {
    return (
        <RadixSeparator.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

/* 
<Separator.Root />
*/
