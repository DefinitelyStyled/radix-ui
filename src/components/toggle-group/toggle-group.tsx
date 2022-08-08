import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { st, classes } from './toggle-group.st.css';

export const ToggleGroup: React.FC<
    RadixToggleGroup.ToggleGroupSingleProps | RadixToggleGroup.ToggleGroupMultipleProps
> = (props) => <RadixToggleGroup.Root {...props} className={st(classes.root, props.className)} />;

export const ToggleGroupItem: React.FC<RadixToggleGroup.ToggleGroupItemProps> = (props) => (
    <RadixToggleGroup.Item {...props} className={st(classes.item, props.className)} />
);

/* 
  <ToggleGroup.Root>
    <ToggleGroup.Item />
  </ToggleGroup.Root>
*/
