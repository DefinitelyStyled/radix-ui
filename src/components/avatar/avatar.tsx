import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { st, classes } from './avatar.st.css';

export const Avatar: typeof RadixAvatar.Root = React.forwardRef(function Avatar(props, forwardRef) {
    return (
        <RadixAvatar.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const AvatarImage: typeof RadixAvatar.Image = React.forwardRef(function AvatarImage(
    props,
    forwardRef
) {
    return (
        <RadixAvatar.Image
            ref={forwardRef}
            {...props}
            className={st(classes.image, props.className)}
        />
    );
});

export const AvatarFallback: typeof RadixAvatar.Fallback = React.forwardRef(function AvatarFallback(
    props,
    forwardRef
) {
    return (
        <RadixAvatar.Fallback
            ref={forwardRef}
            {...props}
            className={st(classes.fallback, props.className)}
        />
    );
});

/* 
<Avatar.Root>
    <Avatar.Image />
    <Avatar.Fallback />
</Avatar.Root>; 
*/
