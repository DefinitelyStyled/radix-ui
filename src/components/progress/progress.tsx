import * as RadixProgress from '@radix-ui/react-progress';
import { st, classes } from './progress.st.css';

export const Progress: React.FC<RadixProgress.ProgressProps> = (props) => (
    <RadixProgress.Root {...props} className={st(classes.root, props.className)} />
);

export const ProgressIndicator: React.FC<RadixProgress.ProgressIndicatorProps> = (props) => (
    <RadixProgress.Indicator {...props} className={st(classes.indicator, props.className)} />
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
