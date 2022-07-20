import type React from 'react';
import { classes as commonClasses } from './common.st.css';
import { st, classes } from './app.st.css';
import { Toolbar } from './toolbar';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, commonClasses.root, className)}>
            <div>
                <Toolbar className={classes.toolbar} />
            </div>
            <div className={classes.dark}>
                <Toolbar className={classes.toolbar} />
            </div>
        </main>
    );
};
