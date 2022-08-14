import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { st, classes } from './tabs.st.css';

export const Tabs: typeof RadixTabs.Root = React.forwardRef(function Tabs(props, forwardRef) {
    return (
        <RadixTabs.Root ref={forwardRef} {...props} className={st(classes.root, props.className)} />
    );
});

export const TabsList: typeof RadixTabs.List = React.forwardRef(function TabsList(
    props,
    forwardRef
) {
    return (
        <RadixTabs.List ref={forwardRef} {...props} className={st(classes.list, props.className)} />
    );
});

export const TabsTrigger: typeof RadixTabs.Trigger = React.forwardRef(function TabsTrigger(
    props,
    forwardRef
) {
    return (
        <RadixTabs.Trigger
            ref={forwardRef}
            {...props}
            className={st(classes.trigger, props.className)}
        />
    );
});

export const TabsContent: typeof RadixTabs.Content = React.forwardRef(function TabsContent(
    props,
    forwardRef
) {
    return (
        <RadixTabs.Content
            ref={forwardRef}
            {...props}
            className={st(classes.content, props.className)}
        />
    );
});

/* 
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger />
    </Tabs.List>
    <Tabs.Content />
  </Tabs.Root>
*/
