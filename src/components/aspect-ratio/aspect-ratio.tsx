import React from 'react';
import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { st, classes } from './aspect-ratio.st.css';

export const AspectRatio: typeof RadixAspectRatio.Root = React.forwardRef(function AspectRatio(
    props,
    forwardRef
) {
    return (
        <RadixAspectRatio.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

// <AspectRatio.Root />
