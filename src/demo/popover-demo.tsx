import React from 'react';
import { classes } from './popover-demo.st.css';
import {
    Popover,
    PopoverArrow,
    PopoverClose,
    PopoverContent,
    PopoverPortal,
    PopoverTrigger,
} from '../components/popover/popover';
import { Cross2Icon, MixerHorizontalIcon } from '@radix-ui/react-icons';

interface PopoverDemoProps {
    className?: string;
}

const PopoverDemo: React.FunctionComponent<PopoverDemoProps> = () => (
    <Popover>
        <PopoverTrigger asChild>
            <button className={classes.iconButton} aria-label="Update dimensions">
                <MixerHorizontalIcon />
            </button>
        </PopoverTrigger>
        <PopoverPortal>
            <PopoverContent sideOffset={5}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <p className={classes.text} style={{ marginBottom: 10 }}>
                        Dimensions
                    </p>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="width">
                            Width
                        </label>
                        <input className={classes.input} id="width" defaultValue="100%" />
                    </fieldset>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="maxWidth">
                            Max. width
                        </label>
                        <input className={classes.input} id="maxWidth" defaultValue="300px" />
                    </fieldset>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="height">
                            Height
                        </label>
                        <input className={classes.input} id="height" defaultValue="25px" />
                    </fieldset>
                    <fieldset className={classes.fieldset}>
                        <label className={classes.label} htmlFor="maxHeight">
                            Max. height
                        </label>
                        <input className={classes.input} id="maxHeight" defaultValue="none" />
                    </fieldset>
                </div>
                <PopoverClose aria-label="Close">
                    <Cross2Icon />
                </PopoverClose>
                <PopoverArrow />
            </PopoverContent>
        </PopoverPortal>
    </Popover>
);

export default PopoverDemo;
