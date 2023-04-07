import React from 'react';
import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { st, classes } from './collapsible.st.css';

export const Collapsible: typeof RadixCollapsible.Root = React.forwardRef(function Collapsible(
    props,
    forwardRef
) {
    return (
        <RadixCollapsible.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const CollapsibleTrigger: typeof RadixCollapsible.Trigger = React.forwardRef(
    function CollapsibleTrigger(props, forwardRef) {
        return (
            <RadixCollapsible.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const CollapsibleContent: typeof RadixCollapsible.Content = React.forwardRef(
    function CollapsibleContent(props, forwardRef) {
        return (
            <RadixCollapsible.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

/* 
<Collapsible.Root>
    <Collapsible.Trigger />
    <Collapsible.Content />
</Collapsible.Root>
*/
