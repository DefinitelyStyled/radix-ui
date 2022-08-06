import type React from 'react';
import { classes as commonClasses } from './common.st.css';
import { st, classes } from './app.st.css';
import { ToolbarDemo } from './demo/toolbar-demo';

import './theme/base.st.css';
import { classes as darkTheme } from './theme/dark.st.css';
import AccordionDemo from './demo/accordion-demo';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, commonClasses.root, className)}>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toolbar</h2>
                <div>
                    <ToolbarDemo className={classes.toolbar} />
                </div>
                <div className={darkTheme.root}>
                    <ToolbarDemo className={classes.toolbar} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Accordion</h2>
                <div>
                    <AccordionDemo className={classes.accordion} />
                </div>
                <div className={darkTheme.root}>
                    <AccordionDemo className={classes.accordion} />
                </div>
            </div>
        </main>
    );
};
