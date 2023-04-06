import type React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar/avatar';

export interface AvatarProps {
    className?: string;
}

export const AvatarDemo: React.FC<AvatarProps> = ({ className }) => (
    <div style={{ display: 'flex', gap: 20 }}>
        <Avatar className={className}>
            <AvatarImage
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
            />
            <AvatarFallback delayMs={600}>CT</AvatarFallback>
        </Avatar>
        <Avatar className={className}>
            <AvatarImage
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Pedro Duarte"
            />
            <AvatarFallback delayMs={600}>JD</AvatarFallback>
        </Avatar>
        <Avatar className={className}>
            <AvatarFallback>PD</AvatarFallback>
        </Avatar>
    </div>
);
