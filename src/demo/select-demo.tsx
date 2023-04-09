import React from 'react';
import { classes } from './select-demo.st.css';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectIcon,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectLabel,
    SelectPortal,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectViewport,
} from '../components/select/select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface SelectDemoProps {
    className?: string;
}

const SelectDemo: React.FunctionComponent<SelectDemoProps> = () => (
    <Select>
        <SelectTrigger aria-label="Food">
            <SelectValue placeholder="Select a fruit…" />
            <SelectIcon>
                <ChevronDownIcon />
            </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
            <SelectContent>
                <SelectScrollUpButton>
                    <ChevronUpIcon />
                </SelectScrollUpButton>
                <SelectViewport>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <DemoSelectItem value="apple">Apple</DemoSelectItem>
                        <DemoSelectItem value="banana">Banana</DemoSelectItem>
                        <DemoSelectItem value="blueberry">Blueberry</DemoSelectItem>
                        <DemoSelectItem value="grapes">Grapes</DemoSelectItem>
                        <DemoSelectItem value="pineapple">Pineapple</DemoSelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <DemoSelectItem value="aubergine">Aubergine</DemoSelectItem>
                        <DemoSelectItem value="broccoli">Broccoli</DemoSelectItem>
                        <DemoSelectItem value="carrot" disabled>
                            Carrot
                        </DemoSelectItem>
                        <DemoSelectItem value="courgette">Courgette</DemoSelectItem>
                        <DemoSelectItem value="leek">Leek</DemoSelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>Meat</SelectLabel>
                        <DemoSelectItem value="beef">Beef</DemoSelectItem>
                        <DemoSelectItem value="chicken">Chicken</DemoSelectItem>
                        <DemoSelectItem value="lamb">Lamb</DemoSelectItem>
                        <DemoSelectItem value="pork">Pork</DemoSelectItem>
                    </SelectGroup>
                </SelectViewport>
                <SelectScrollDownButton>
                    <ChevronDownIcon />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPortal>
    </Select>
);

const DemoSelectItem = React.forwardRef(function SelectItemDemo(
    {
        children,
        className,
        ...props
    }: {
        children: React.ReactNode;
        className?: string;
        value: string;
        disabled?: boolean;
    },
    forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
    return (
        <SelectItem className={className} {...props} ref={forwardedRef}>
            <SelectItemText>{children}</SelectItemText>
            <SelectItemIndicator>
                <CheckIcon />
            </SelectItemIndicator>
        </SelectItem>
    );
});

export default SelectDemo;
