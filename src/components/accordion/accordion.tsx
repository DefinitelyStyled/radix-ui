import * as RadixAccordion from '@radix-ui/react-accordion';
import { st, classes } from './accordion.st.css';

export const Accordion: React.FC<
    RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps
> = (props) => <RadixAccordion.Root {...props} className={st(classes.root, props.className)} />;
export const AccordionItem: React.FC<RadixAccordion.AccordionItemProps> = (props) => (
    <RadixAccordion.Item {...props} className={st(classes.item, props.className)} />
);
export const AccordionHeader: React.FC<RadixAccordion.AccordionHeaderProps> = (props) => (
    <RadixAccordion.Header {...props} className={st(classes.header, props.className)} />
);
export const AccordionTrigger: React.FC<RadixAccordion.AccordionTriggerProps> = (props) => (
    <RadixAccordion.Trigger {...props} className={st(classes.trigger, props.className)} />
);
export const AccordionContent: React.FC<RadixAccordion.AccordionContentProps> = (props) => (
    <RadixAccordion.Content {...props} className={st(classes.content, props.className)} />
);

// // <RadixAccordion.Root>
// //     <RadixAccordion.Item>
// //         <RadixAccordion.Header>
// //             <RadixAccordion.Trigger />
// //         </RadixAccordion.Header>
// //         <RadixAccordion.Content />
// //     </RadixAccordion.Item>
// // </RadixAccordion.Root>
