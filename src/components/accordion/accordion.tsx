import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { st, classes } from './accordion.st.css';

export const Accordion: typeof RadixAccordion.Root = React.forwardRef(function Accordion(
    props,
    forwardRef
) {
    return (
        <RadixAccordion.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const AccordionItem: typeof RadixAccordion.Item = React.forwardRef(function AccordionItem(
    props,
    forwardRef
) {
    return (
        <RadixAccordion.Item
            ref={forwardRef}
            {...props}
            className={st(classes.item, props.className)}
        />
    );
});

export const AccordionHeader: typeof RadixAccordion.Header = React.forwardRef(
    function AccordionHeader(props, forwardRef) {
        return (
            <RadixAccordion.Header
                ref={forwardRef}
                {...props}
                className={st(classes.header, props.className)}
            />
        );
    }
);

export const AccordionTrigger: typeof RadixAccordion.Trigger = React.forwardRef(
    function AccordionTrigger(props, forwardRef) {
        return (
            <RadixAccordion.Trigger
                ref={forwardRef}
                {...props}
                className={st(classes.trigger, props.className)}
            />
        );
    }
);

export const AccordionContent: typeof RadixAccordion.Content = React.forwardRef(
    function AccordionContent(props, forwardRef) {
        return (
            <RadixAccordion.Content
                ref={forwardRef}
                {...props}
                className={st(classes.content, props.className)}
            />
        );
    }
);

// // <RadixAccordion.Root>
// //     <RadixAccordion.Item>
// //         <RadixAccordion.Header>
// //             <RadixAccordion.Trigger />
// //         </RadixAccordion.Header>
// //         <RadixAccordion.Content />
// //     </RadixAccordion.Item>
// // </RadixAccordion.Root>
