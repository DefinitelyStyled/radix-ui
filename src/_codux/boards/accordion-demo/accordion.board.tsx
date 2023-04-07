import { createBoard } from '@wixc3/react-board';
import { AccordionDemo } from '../../../demo/accordion-demo';

export default createBoard({
    name: 'Accordion',
    Board: () => <AccordionDemo />
});
