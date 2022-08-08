import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { st, classes } from './collapsible.st.css';

export const Collapsible: React.FC<RadixCollapsible.CollapsibleProps> = (props) => (
    <RadixCollapsible.Root {...props} className={st(classes.root, props.className)} />
);

export const CollapsibleTrigger: React.FC<RadixCollapsible.CollapsibleTriggerProps> = (props) => (
    <RadixCollapsible.CollapsibleTrigger
        {...props}
        className={st(classes.trigger, props.className)}
    />
);
export const CollapsibleContent: React.FC<RadixCollapsible.CollapsibleContentProps> = (props) => (
    <RadixCollapsible.CollapsibleContent
        {...props}
        className={st(classes.content, props.className)}
    />
);

/* 
<Collapsible.Root>
    <Collapsible.Trigger />
    <Collapsible.Content />
</Collapsible.Root>
*/
