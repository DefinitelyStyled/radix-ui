import * as RadixAvatar from '@radix-ui/react-avatar';
import { st, classes } from './avatar.st.css';

export const Avatar: React.FC<RadixAvatar.AvatarProps> = (props) => (
    <RadixAvatar.Root {...props} className={st(classes.root, props.className)} />
);

export const AvatarImage: React.FC<RadixAvatar.AvatarImageProps> = (props) => (
    <RadixAvatar.Root {...props} className={st(classes.image, props.className)} />
);

export const AvatarFallback: React.FC<RadixAvatar.AvatarFallbackProps> = (props) => (
    <RadixAvatar.Root {...props} className={st(classes.fallback, props.className)} />
);

/* 
<Avatar.Root>
    <Avatar.Image />
    <Avatar.Fallback />
</Avatar.Root>; 
*/
