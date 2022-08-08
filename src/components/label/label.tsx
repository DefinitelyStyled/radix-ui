import * as RadixLabel from '@radix-ui/react-label';
import { st, classes } from './hover-card.st.css';

export const Label: React.FC<RadixLabel.LabelProps> = (props) => (
    <RadixLabel.Root {...props} className={st(classes.root, props.className)} />
);

/* 
<Label.Root />
*/
