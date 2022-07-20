import type React from 'react';
import { st, classes } from './toolbar.st.css';
import * as RadixToolbar from '@radix-ui/react-toolbar';
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
    StrikethroughIcon,
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    FontBoldIcon,
    FontItalicIcon,
} from '@radix-ui/react-icons';

export interface ToolbarProps {
    className?: string;
}

export const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
    return (
        <RadixToolbar.Root className={st(classes.root, className)} aria-label="Formatting options">
            <RadixToolbar.ToggleGroup
                type="multiple"
                className={classes.toggleGroup}
                aria-label="Text formatting"
            >
                <RadixToolbar.ToggleItem
                    value="bold"
                    className={classes.toggleItem}
                    aria-label="Bold"
                >
                    <FontBoldIcon />
                </RadixToolbar.ToggleItem>
                <RadixToolbar.ToggleItem
                    value="italic"
                    className={classes.toggleItem}
                    aria-label="Italic"
                >
                    <FontItalicIcon />
                </RadixToolbar.ToggleItem>
                <RadixToolbar.ToggleItem
                    value="strikethrough"
                    className={classes.toggleItem}
                    aria-label="Strike through"
                >
                    <StrikethroughIcon />
                </RadixToolbar.ToggleItem>
            </RadixToolbar.ToggleGroup>
            <RadixToolbar.Separator className={classes.separator} />
            <RadixToolbar.ToggleGroup
                type="single"
                defaultValue="center"
                className={classes.toggleGroup}
                aria-label="Text alignment"
            >
                <RadixToolbar.ToggleItem
                    value="left"
                    className={classes.toggleItem}
                    aria-label="Left aligned"
                >
                    <TextAlignLeftIcon />
                </RadixToolbar.ToggleItem>
                <RadixToolbar.ToggleItem
                    value="center"
                    className={classes.toggleItem}
                    aria-label="Center aligned"
                >
                    <TextAlignCenterIcon />
                </RadixToolbar.ToggleItem>
                <RadixToolbar.ToggleItem
                    value="right"
                    className={classes.toggleItem}
                    aria-label="Right aligned"
                >
                    <TextAlignRightIcon />
                </RadixToolbar.ToggleItem>
            </RadixToolbar.ToggleGroup>
            <RadixToolbar.Separator className={classes.separator} />
            {/* <RadixToolbar.Link href="#" target="_blank" css={{ marginRight: 10 }}> */}
            <RadixToolbar.Link href="#" className={classes.link}>
                Edited 2 hours ago
            </RadixToolbar.Link>
            {/* <RadixToolbar.Button css={{ marginLeft: 'auto' }}>Share</RadixToolbar.Button> */}
            <RadixToolbar.Button className={classes.button}>Share</RadixToolbar.Button>
        </RadixToolbar.Root>
    );
};

// const StyledToolbar = styled(ToolbarPrimitive.Root, {
//   display: 'flex',
//   padding: 10,
//   width: '100%',
//   minWidth: 'max-content',
//   borderRadius: 6,
//   backgroundColor: 'white',
//   boxShadow: `0 2px 10px ${blackA.blackA7}`,
// });

// const itemStyles = {
//   all: 'unset',
//   flex: '0 0 auto',
//   color: mauve.mauve11,
//   height: 25,
//   padding: '0 5px',
//   borderRadius: 4,
//   display: 'inline-flex',
//   fontSize: 13,
//   lineHeight: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   '&:hover': { backgroundColor: violet.violet3, color: violet.violet11 },
//   '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
// };

// const StyledButton = styled(
//   ToolbarPrimitive.Button,
//   {
//     ...itemStyles,
//     paddingLeft: 10,
//     paddingRight: 10,
//     color: 'white',
//     backgroundColor: violet.violet9,
//   },
//   { '&:hover': { color: 'white', backgroundColor: violet.violet10 } }
// );

// const StyledLink = styled(
//   ToolbarPrimitive.Link,
//   {
//     ...itemStyles,
//     backgroundColor: 'transparent',
//     color: mauve.mauve11,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
// );

// const StyledSeparator = styled(ToolbarPrimitive.Separator, {
//   width: 1,
//   backgroundColor: mauve.mauve6,
//   margin: '0 10px',
// });

// const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
//   display: 'inline-flex',
//   borderRadius: 4,
// });

// const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
//   ...itemStyles,
//   boxShadow: 0,
//   backgroundColor: 'white',
//   marginLeft: 2,
//   '&:first-child': { marginLeft: 0 },
//   '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
// });

// // Exports
// export const Toolbar = StyledToolbar;
// export const ToolbarButton = StyledButton;
// export const ToolbarSeparator = StyledSeparator;
// export const ToolbarLink = StyledLink;
// export const ToolbarToggleGroup = StyledToggleGroup;
// export const ToolbarToggleItem = StyledToggleItem;

// const ToolbarDemo = () => (
//   <Toolbar aria-label="Formatting options">
//     <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
//       <ToolbarToggleItem value="bold" aria-label="Bold">
//         <FontBoldIcon />
//       </ToolbarToggleItem>
//       <ToolbarToggleItem value="italic" aria-label="Italic">
//         <FontItalicIcon />
//       </ToolbarToggleItem>
//       <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
//         <StrikethroughIcon />
//       </ToolbarToggleItem>
//     </ToolbarToggleGroup>
//     <ToolbarSeparator />
//     <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
//       <ToolbarToggleItem value="left" aria-label="Left aligned">
//         <TextAlignLeftIcon />
//       </ToolbarToggleItem>
//       <ToolbarToggleItem value="center" aria-label="Center aligned">
//         <TextAlignCenterIcon />
//       </ToolbarToggleItem>
//       <ToolbarToggleItem value="right" aria-label="Right aligned">
//         <TextAlignRightIcon />
//       </ToolbarToggleItem>
//     </ToolbarToggleGroup>
//     <ToolbarSeparator />
//     <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>
//       Edited 2 hours ago
//     </ToolbarLink>
//     <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
//   </Toolbar>
// );

// export default ToolbarDemo;
