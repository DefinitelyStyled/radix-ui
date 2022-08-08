import * as RadixTabs from '@radix-ui/react-tabs';
import { st, classes } from './tabs.st.css';

export const Tabs: React.FC<RadixTabs.TabsProps> = (props) => (
    <RadixTabs.Root {...props} className={st(classes.root, props.className)} />
);

export const TabsList: React.FC<RadixTabs.TabsListProps> = (props) => (
    <RadixTabs.List {...props} className={st(classes.list, props.className)} />
);

export const TabsTrigger: React.FC<RadixTabs.TabsTriggerProps> = (props) => (
    <RadixTabs.Trigger {...props} className={st(classes.trigger, props.className)} />
);

export const TabsContent: React.FC<RadixTabs.TabsContentProps> = (props) => (
    <RadixTabs.Content {...props} className={st(classes.content, props.className)} />
);

/* 
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger />
    </Tabs.List>
    <Tabs.Content />
  </Tabs.Root>
*/
