import type React from 'react';
import { st, classes } from './app.st.css';
import { classes as darkTheme } from './theme/dark.st.css';
import './theme/base.st.css';

import { ToolbarDemo } from './demo/toolbar-demo';
import AccordionDemo from './demo/accordion-demo';
import AspectRatioDemo from './demo/aspect-ratio-demo';
import { AvatarDemo } from './demo/avatar-demo';
import { AlertDialogDemo } from './demo/alert-dialog-demo';
import CheckboxDemo from './demo/checkbox-demo';
import CollapsibleDemo from './demo/collapsible-demo';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Accordion</h2>
                <div>
                    <AccordionDemo className={classes.accordion} />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <AccordionDemo className={classes.accordion} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Alert Dialog</h2>
                <div>
                    <AlertDialogDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <AlertDialogDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Aspect Ratio</h2>
                <div>
                    <AspectRatioDemo className={classes.aspectRatio} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Avatar</h2>
                <div>
                    <AvatarDemo className={classes.avatar} />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <AvatarDemo className={classes.avatar} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Checkbox</h2>
                <div>
                    <CheckboxDemo className={classes.checkbox} />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <CheckboxDemo className={classes.checkbox} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Collapsible</h2>
                <div>
                    <CollapsibleDemo className={classes.collapsible} />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <CollapsibleDemo className={classes.collapsible} />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toolbar</h2>
                <div>
                    <ToolbarDemo className={classes.toolbar} />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ToolbarDemo className={classes.toolbar} />
                </div>
            </div>
        </main>
    );
};
