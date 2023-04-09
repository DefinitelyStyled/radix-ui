import React from 'react';
import { classes } from './switch-demo.st.css';
import { Switch, SwitchThumb } from '../components/switch/switch';

interface SwitchDemoProps {
    className?: string;
}

const SwitchDemo: React.FunctionComponent<SwitchDemoProps> = () => (
    <form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label className={classes.label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
                Airplane mode
            </label>
            <Switch id="airplane-mode">
                <SwitchThumb />
            </Switch>
        </div>
    </form>
);

export default SwitchDemo;
