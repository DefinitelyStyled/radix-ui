import React from 'react';
import { classes, st } from './tooltip-demo.st.css';
import {
    Tooltip,
    TooltipArrow,
    TooltipContent,
    TooltipPortal,
    TooltipProvider,
    TooltipTrigger,
} from '../components/tooltip/tooltip';
import { PlusIcon } from '@radix-ui/react-icons';

interface TooltipDemoProps {
    className?: string;
}

const TooltipDemo: React.FunctionComponent<TooltipDemoProps> = () => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <button className={classes.iconButton}>
                    <PlusIcon />
                </button>
            </TooltipTrigger>
            <TooltipPortal>
                <TooltipContent sideOffset={5}>
                    Add to library
                    <TooltipArrow />
                </TooltipContent>
            </TooltipPortal>
        </Tooltip>
    </TooltipProvider>
);

export default TooltipDemo;
