import React from 'react';
import { classes, st } from './toggle-demo.st.css';
import { Toggle } from '../components/toggle/toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';

interface ToggleDemoProps {
    className?: string;
}

const ToggleDemo: React.FunctionComponent<ToggleDemoProps> = () => (
    <Toggle aria-label="Toggle italic">
        <FontItalicIcon />
    </Toggle>
);

export default ToggleDemo;
