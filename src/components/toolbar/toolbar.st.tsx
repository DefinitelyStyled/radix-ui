import * as RadixToolbar from '@radix-ui/react-toolbar';
import { st, classes } from './toolbar.st.css';

export const ToolbarRoot: React.FC<RadixToolbar.ToolbarProps> = (props) => (
    <RadixToolbar.Root {...props} className={st(classes.root, props.className)} />
);
export const ToolbarToggleGroup: React.FC<RadixToolbar.ToggleGroupProps> = (props) => (
    <RadixToolbar.ToggleGroup {...props} className={st(classes.toggleGroup, props.className)} />
);
export const ToolbarToggleItem: React.FC<RadixToolbar.ToolbarToggleItemProps> = (props) => (
    <RadixToolbar.ToggleItem {...props} className={st(classes.toggleItem, props.className)} />
);
export const ToolbarSeparator: React.FC<RadixToolbar.SeparatorProps> = (props) => (
    <RadixToolbar.Separator {...props} className={st(classes.separator, props.className)} />
);
export const ToolbarLink: React.FC<RadixToolbar.ToolbarLinkProps> = (props) => (
    <RadixToolbar.Link {...props} className={st(classes.link, props.className)} />
);
export const ToolbarButton: React.FC<RadixToolbar.ToolbarButtonProps> = (props) => (
    <RadixToolbar.Button {...props} className={st(classes.button, props.className)} />
);
