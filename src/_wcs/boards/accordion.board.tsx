import { createBoard } from '@wixc3/react-board';
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from '../../components/accordion/accordion';

export default createBoard({
    name: 'Accordion',
    Board: () => <div>
        <Accordion>
            <AccordionItem value="item-1">
                <AccordionHeader>
                    <AccordionTrigger>
                        Is it accessible?
                    </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem></Accordion>
    </div>
});
