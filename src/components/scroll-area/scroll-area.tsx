import React from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { st, classes } from './scroll-area.st.css';

export const ScrollArea: typeof RadixScrollArea.Root = React.forwardRef(function ScrollArea(
    props,
    forwardRef
) {
    return (
        <RadixScrollArea.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const ScrollAreaViewport: typeof RadixScrollArea.Viewport = React.forwardRef(
    function ScrollAreaViewport(props, forwardRef) {
        return (
            <RadixScrollArea.Viewport
                ref={forwardRef}
                {...props}
                className={st(classes.viewport, props.className)}
            />
        );
    }
);

export const ScrollAreaScrollbar: typeof RadixScrollArea.Scrollbar = React.forwardRef(
    function ScrollAreaScrollbar(props, forwardRef) {
        return (
            <RadixScrollArea.Scrollbar
                ref={forwardRef}
                {...props}
                className={st(classes.scrollbar, props.className)}
            />
        );
    }
);

export const ScrollAreaThumb: typeof RadixScrollArea.Thumb = React.forwardRef(
    function ScrollAreaThumb(props, forwardRef) {
        return (
            <RadixScrollArea.Thumb
                ref={forwardRef}
                {...props}
                className={st(classes.thumb, props.className)}
            />
        );
    }
);

export const ScrollAreaCorner: typeof RadixScrollArea.Corner = React.forwardRef(
    function ScrollAreaCorner(props, forwardRef) {
        return (
            <RadixScrollArea.Corner
                ref={forwardRef}
                {...props}
                className={st(classes.corner, props.className)}
            />
        );
    }
);

/* 
  <ScrollArea.Root>
    <ScrollArea.Viewport />
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
*/
