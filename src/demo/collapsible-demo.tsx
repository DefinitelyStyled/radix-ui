import React from 'react';
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons';
import { classes } from './collapsible-demo.st.css';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../components/collapsible/collapsible';

interface CollapsibleDemoProps {
    className?: string;
}

const CollapsibleDemo: React.FunctionComponent<CollapsibleDemoProps> = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className={classes.text} style={{ color: 'white' }}>
                    @peduarte starred 3 repositories
                </span>
                <CollapsibleTrigger asChild>
                    <button className={classes.text}>
                        {open ? <Cross2Icon /> : <RowSpacingIcon />}
                    </button>
                </CollapsibleTrigger>
            </div>

            <div className={classes.repository}>
                <span className={classes.text}>@radix-ui/primitives</span>
            </div>

            <CollapsibleContent>
                <div className={classes.repository}>
                    <span className={classes.text}>@radix-ui/colors</span>
                </div>
                <div className={classes.repository}>
                    <span className={classes.text}>@stitches/react</span>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default CollapsibleDemo;
