import React from 'react';
import { classes } from './label-demo.st.css';
import { Label } from '../components/label/label';

interface LabelDemoProps {
    className?: string;
}

const LabelDemo: React.FunctionComponent<LabelDemoProps> = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '0 20px',
                flexWrap: 'wrap',
                gap: 15,
                alignItems: 'center',
            }}
        >
            <Label htmlFor="firstName">First name</Label>
            <input
                className={classes.input}
                type="text"
                id="firstName"
                defaultValue="Pedro Duarte"
            />
        </div>
    );
};

export default LabelDemo;
