import React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { st, classes } from './progress.st.css';

export const Progress: typeof RadixProgress.Root = React.forwardRef(function Progress(
    props,
    forwardRef
) {
    return (
        <RadixProgress.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const ProgressIndicator: typeof RadixProgress.Indicator = React.forwardRef(
    function ProgressIndicator(props, forwardRef) {
        return (
            <RadixProgress.Indicator
                ref={forwardRef}
                {...props}
                className={st(classes.indicator, props.className)}
            />
        );
    }
);

/* 
  <Popover.Root>
    <Popover.Trigger />
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
*/
