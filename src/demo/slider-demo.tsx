import React from 'react';
import { classes } from './slider-demo.st.css';
import { Slider, SliderRange, SliderThumb, SliderTrack } from '../components/slider/slider';

interface SliderDemoProps {
    className?: string;
}

const SliderDemo: React.FunctionComponent<SliderDemoProps> = () => (
    <form>
        <Slider defaultValue={[50]} max={100} step={1} aria-label="Volume">
            <SliderTrack>
                <SliderRange />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    </form>
);

export default SliderDemo;
