import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { st, classes } from './radio-group.st.css';

export const RadioGroup: React.FC<RadixRadioGroup.RadioGroupProps> = (props) => (
    <RadixRadioGroup.Root {...props} className={st(classes.root, props.className)} />
);

export const RadioGroupItem: React.FC<RadixRadioGroup.RadioGroupItemProps> = (props) => (
    <RadixRadioGroup.Item {...props} className={st(classes.item, props.className)} />
);

export const RadioGroupIndicator: React.FC<RadixRadioGroup.RadioGroupIndicatorProps> = (props) => (
    <RadixRadioGroup.Indicator {...props} className={st(classes.indicator, props.className)} />
);

/* 
  <RadioGroup.Root>
    <RadioGroup.Item>
      <RadioGroup.Indicator />
    </RadioGroup.Item>
  </RadioGroup.Root>
*/
