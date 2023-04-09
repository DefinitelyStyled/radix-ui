import React from 'react';
import { classes } from './separator-demo.st.css';
import { Separator } from '../components/separator/separator';

interface SeparatorDemoProps {
    className?: string;
}

const SeparatorDemo: React.FunctionComponent<SeparatorDemoProps> = () => (
    <div style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
        <div className={classes.text} style={{ fontWeight: 500 }}>
            Radix Primitives
        </div>
        <div className={classes.text}>An open-source UI component library.</div>
        <Separator style={{ margin: '15px 0' }} />
        <div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
            <div className={classes.text}>Blog</div>
            <Separator decorative orientation="vertical" style={{ margin: '0 15px' }} />
            <div className={classes.text}>Docs</div>
            <Separator decorative orientation="vertical" style={{ margin: '0 15px' }} />
            <div className={classes.text}>Source</div>
        </div>
    </div>
);

export default SeparatorDemo;
