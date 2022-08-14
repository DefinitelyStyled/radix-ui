import React from 'react';
import * as RadixToolbar from '@radix-ui/react-toolbar';
import { st, classes } from './toolbar.st.css';

export const Toolbar: typeof RadixToolbar.Root = React.forwardRef(function Toolbar(
    props,
    forwardRef
) {
    return (
        <RadixToolbar.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const ToolbarToggleGroup: typeof RadixToolbar.ToggleGroup = React.forwardRef(
    function ToolbarToggleGroup(props, forwardRef) {
        return (
            <RadixToolbar.ToggleGroup
                ref={forwardRef}
                {...props}
                className={st(classes.toggleGroup, props.className)}
            />
        );
    }
);

export const ToolbarToggleItem: typeof RadixToolbar.ToggleItem = React.forwardRef(
    function ToolbarToggleItem(props, forwardRef) {
        return (
            <RadixToolbar.ToggleItem
                ref={forwardRef}
                {...props}
                className={st(classes.toggleItem, props.className)}
            />
        );
    }
);

export const ToolbarSeparator: typeof RadixToolbar.Separator = React.forwardRef(
    function ToolbarSeparator(props, forwardRef) {
        return (
            <RadixToolbar.Separator
                ref={forwardRef}
                {...props}
                className={st(classes.separator, props.className)}
            />
        );
    }
);

export const ToolbarLink: typeof RadixToolbar.Link = React.forwardRef(function ToolbarLink(
    props,
    forwardRef
) {
    return (
        <RadixToolbar.Link
            ref={forwardRef}
            {...props}
            className={st(classes.link, props.className)}
        />
    );
});

export const ToolbarButton: typeof RadixToolbar.Button = React.forwardRef(function ToolbarButton(
    props,
    forwardRef
) {
    return (
        <RadixToolbar.Button
            ref={forwardRef}
            {...props}
            className={st(classes.button, props.className)}
        />
    );
});

/*
  <Toolbar.Root>
    <Toolbar.Button />
    <Toolbar.Separator />
    <Toolbar.Link />
    <Toolbar.ToggleGroup>
      <Toolbar.ToggleItem />
    </Toolbar.ToggleGroup>
  </Toolbar.Root>
*/
