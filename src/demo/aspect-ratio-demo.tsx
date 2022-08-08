import type React from 'react';
import { AspectRatio } from '../components/aspect-ratio/aspect-ratio';

interface AspectRatioDemoProps {
    className?: string;
}

const AspectRatioDemo: React.FunctionComponent<AspectRatioDemoProps> = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <img
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape photo by Tobias Tullius"
            />
        </AspectRatio>
    );
};

export default AspectRatioDemo;
