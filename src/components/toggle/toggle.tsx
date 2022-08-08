import * as RadixToggle from '@radix-ui/react-toggle';
import { st, classes } from './toggle.st.css';

export const Toggle: React.FC<RadixToggle.ToggleProps> = (props) => (
    <RadixToggle.Root {...props} className={st(classes.root, props.className)} />
);

/* 
  <Toggle.Root />
*/
