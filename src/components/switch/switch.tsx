import * as RadixSwitch from '@radix-ui/react-switch';
import { st, classes } from './switch.st.css';

export const Switch: React.FC<RadixSwitch.SwitchProps> = (props) => (
    <RadixSwitch.Root {...props} className={st(classes.root, props.className)} />
);

export const SwitchThumb: React.FC<RadixSwitch.SwitchThumbProps> = (props) => (
    <RadixSwitch.Thumb {...props} className={st(classes.thumb, props.className)} />
);

/* 
  <Switch.Root>
    <Switch.Thumb />
  </Switch.Root>
*/
