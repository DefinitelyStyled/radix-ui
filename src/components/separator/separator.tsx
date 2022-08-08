import * as RadixSeparator from '@radix-ui/react-separator';
import { st, classes } from './separator.st.css';

export const ScrollArea: React.FC<RadixSeparator.ScrollAreaProps> = (props) => (
    <RadixSeparator.Root {...props} className={st(classes.root, props.className)} />
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
