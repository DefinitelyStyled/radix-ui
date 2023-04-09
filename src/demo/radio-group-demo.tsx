import React from 'react';
import { classes } from './radio-group-demo.st.css';
import {
    RadioGroup,
    RadioGroupIndicator,
    RadioGroupItem,
} from '../components/radio-group/radio-group';

interface RadioGroupDemoProps {
    className?: string;
}

const RadioGroupDemo: React.FunctionComponent<RadioGroupDemoProps> = () => (
    <form>
        <RadioGroup defaultValue="default" aria-label="View density">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroupItem value="default" id="r1">
                    <RadioGroupIndicator />
                </RadioGroupItem>
                <label className={classes.label} htmlFor="r1">
                    Default
                </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroupItem value="comfortable" id="r2">
                    <RadioGroupIndicator />
                </RadioGroupItem>
                <label className={classes.label} htmlFor="r2">
                    Comfortable
                </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroupItem value="compact" id="r3">
                    <RadioGroupIndicator />
                </RadioGroupItem>
                <label className={classes.label} htmlFor="r3">
                    Compact
                </label>
            </div>
        </RadioGroup>
    </form>
);
export default RadioGroupDemo;
