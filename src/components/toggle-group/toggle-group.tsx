import React from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { st, classes } from './toggle-group.st.css';

export const ToggleGroup: typeof RadixToggleGroup.Root = React.forwardRef(function ToggleGroup(
    props,
    forwardRef
) {
    return (
        <RadixToggleGroup.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const ToggleGroupItem: typeof RadixToggleGroup.Item = React.forwardRef(
    function ToggleGroupItem(props, forwardRef) {
        return (
            <RadixToggleGroup.Item
                ref={forwardRef}
                {...props}
                className={st(classes.root, props.className)}
            />
        );
    }
);

/* 
  <ToggleGroup.Root>
    <ToggleGroup.Item />
  </ToggleGroup.Root>
*/
