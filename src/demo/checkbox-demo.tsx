import type React from 'react';
import { Checkbox, CheckboxIndicator } from '../components/checkbox/checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { classes } from './checkbox-demo.st.css';

interface CheckboxDemoProps {
    className?: string;
}

const CheckboxDemo: React.FunctionComponent<CheckboxDemoProps> = () => {
    return (
        <form>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox defaultChecked id="c1">
                    <CheckboxIndicator>
                        <CheckIcon />
                    </CheckboxIndicator>
                </Checkbox>
                <label className={classes.label} htmlFor="c1">
                    Accept terms and conditions.
                </label>
            </div>
        </form>
    );
};

export default CheckboxDemo;
