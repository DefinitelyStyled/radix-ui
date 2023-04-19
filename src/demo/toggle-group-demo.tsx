import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group/toggle-group';
import { TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon } from '@radix-ui/react-icons';

interface ToggleGroupDemoProps {
    className?: string;
}

const ToggleGroupDemo: React.FunctionComponent<ToggleGroupDemoProps> = () => (
    <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <ToggleGroupItem value="left" aria-label="Left aligned">
            <TextAlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center aligned">
            <TextAlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right aligned">
            <TextAlignRightIcon />
        </ToggleGroupItem>
    </ToggleGroup>
);

export default ToggleGroupDemo;
