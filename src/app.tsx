import type React from 'react';
import './globals.st.css';
import './theme/base.st.css';
import { classes as darkTheme } from './theme/dark.st.css';
import { st, classes } from './app.st.css';

import AccordionDemo from './demo/accordion-demo';
import AspectRatioDemo from './demo/aspect-ratio-demo';
import { AvatarDemo } from './demo/avatar-demo';
import { AlertDialogDemo } from './demo/alert-dialog-demo';
import CheckboxDemo from './demo/checkbox-demo';
import CollapsibleDemo from './demo/collapsible-demo';
import ContextMenuDemo from './demo/context-menu-demo';
import DialogDemo from './demo/dialog-demo';
import DropdownMenuDemo from './demo/dropdown-menu-demo';
import HoverCardDemo from './demo/hover-card-demo';
import LabelDemo from './demo/label-demo';
import NavigationMenuDemo from './demo/navigation-menu-demo';
import PopoverDemo from './demo/popover-demo';
import ProgressDemo from './demo/progress-demo';
import RadioGroupDemo from './demo/radio-group-demo';
import ScrollAreaDemo from './demo/scroll-area-demo';
import SelectDemo from './demo/select-demo';
import SeparatorDemo from './demo/separator-demo';
import SliderDemo from './demo/slider-demo';
import SwitchDemo from './demo/switch-demo';
import TabsDemo from './demo/tabs-demo';
import ToastDemo from './demo/toast-demo';
import ToggleDemo from './demo/toggle-demo';
import ToggleGroupDemo from './demo/toggle-group-demo';
import ToolbarDemo from './demo/toolbar-demo';
import TooltipDemo from './demo/tooltip-demo';
import FormDemo from './demo/form-demo';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Accordion</h2>
                <div>
                    <AccordionDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <AccordionDemo />
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
                    <AspectRatioDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Avatar</h2>
                <div>
                    <AvatarDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <AvatarDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Checkbox</h2>
                <div>
                    <CheckboxDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <CheckboxDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Collapsible</h2>
                <div>
                    <CollapsibleDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <CollapsibleDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Context Menu</h2>
                <div>
                    <ContextMenuDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ContextMenuDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Dialog</h2>
                <div>
                    <DialogDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <DialogDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Dropdown Menu</h2>
                <div>
                    <DropdownMenuDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <DropdownMenuDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Form</h2>
                <div>
                    <FormDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <FormDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Hover Card</h2>
                <div>
                    <HoverCardDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <HoverCardDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Label</h2>
                <div>
                    <LabelDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <LabelDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Navigation Menu</h2>
                <div>
                    <NavigationMenuDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Popover</h2>
                <div>
                    <PopoverDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <PopoverDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Progress</h2>
                <div>
                    <ProgressDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ProgressDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Radio Group</h2>
                <div>
                    <RadioGroupDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <RadioGroupDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Scroll Area</h2>
                <div>
                    <ScrollAreaDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ScrollAreaDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Select</h2>
                <div>
                    <SelectDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <SelectDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Separator</h2>
                <div>
                    <SeparatorDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <SeparatorDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Slider</h2>
                <div>
                    <SliderDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <SliderDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Switch</h2>
                <div>
                    <SwitchDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <SwitchDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Tabs</h2>
                <div>
                    <TabsDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <TabsDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toast</h2>
                <div>
                    <ToastDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ToastDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toggle</h2>
                <div>
                    <ToggleDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ToggleDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toggle Group</h2>
                <div>
                    <ToggleGroupDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ToggleGroupDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Toolbar</h2>
                <div>
                    <ToolbarDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <ToolbarDemo />
                </div>
            </div>
            <div className={classes.compSection}>
                <h2 className={classes.compTitle}>Tooltip</h2>
                <div>
                    <TooltipDemo />
                </div>
                <div className={st(darkTheme.root, classes.themedSection)}>
                    <TooltipDemo />
                </div>
            </div>
        </main>
    );
};
