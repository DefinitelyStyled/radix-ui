import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { st, classes } from './scroll-area.st.css';

export const ScrollArea: React.FC<RadixScrollArea.ScrollAreaProps> = (props) => (
    <RadixScrollArea.Root {...props} className={st(classes.root, props.className)} />
);

export const ScrollAreaViewport: React.FC<RadixScrollArea.ScrollAreaViewportProps> = (props) => (
    <RadixScrollArea.Viewport {...props} className={st(classes.viewport, props.className)} />
);

export const ScrollAreaScrollbar: React.FC<RadixScrollArea.ScrollAreaScrollbarProps> = (props) => (
    <RadixScrollArea.Scrollbar {...props} className={st(classes.scrollbar, props.className)} />
);

export const ScrollAreaThumb: React.FC<RadixScrollArea.ScrollAreaThumbProps> = (props) => (
    <RadixScrollArea.Thumb {...props} className={st(classes.scrollbar, props.className)} />
);

export const ScrollAreaCorner: React.FC<RadixScrollArea.ScrollAreaCornerProps> = (props) => (
    <RadixScrollArea.Corner {...props} className={st(classes.scrollbar, props.className)} />
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
