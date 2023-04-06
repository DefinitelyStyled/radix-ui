import React from 'react';
import { createBoard } from '@wixc3/react-board';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../../../components/collapsible/collapsible';

export default createBoard({
    name: 'Collapsible',
    Board: () => {
        const [open, setOpen] = React.useState(false);

        return (
            <Collapsible open={open} onOpenChange={setOpen}>
                <div>
                    @peduarte starred 3 repositories
                    <CollapsibleTrigger>x</CollapsibleTrigger>
                </div>

                <div>@radix-ui/primitives</div>

                <CollapsibleContent>
                    <div>@radix-ui/colors</div>
                    <div>@stitches/react</div>
                </CollapsibleContent>
            </Collapsible>
        );
    },
});
