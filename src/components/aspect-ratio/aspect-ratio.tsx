import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { st, classes } from './aspect-ratio.st.css';

export const AspectRatio: React.FC<RadixAspectRatio.AspectRatioProps> = (props) => (
    <RadixAspectRatio.Root {...props} className={st(classes.root, props.className)} />
);
