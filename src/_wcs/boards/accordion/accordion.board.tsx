import { createBoard } from '@wixc3/react-board';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionContent,
} from '../../../components/accordion/accordion';

export default createBoard({
    name: 'Accordion',
    Board: () => (
        <div>
            <Accordion type="single" defaultValue="item-1" collapsible={true}>
                <AccordionItem value="item-1">
                    <AccordionHeader>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionHeader>
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    ),
});
