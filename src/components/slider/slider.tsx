import React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { st, classes } from './slider.st.css';

export const Slider: typeof RadixSlider.Root = React.forwardRef(function Slider(props, forwardRef) {
    return (
        <RadixSlider.Root
            ref={forwardRef}
            {...props}
            className={st(classes.root, props.className)}
        />
    );
});

export const SliderTrack: typeof RadixSlider.Track = React.forwardRef(function SliderTrack(
    props,
    forwardRef
) {
    return (
        <RadixSlider.Track
            ref={forwardRef}
            {...props}
            className={st(classes.track, props.className)}
        />
    );
});

export const SliderRange: typeof RadixSlider.Range = React.forwardRef(function SliderRange(
    props,
    forwardRef
) {
    return (
        <RadixSlider.Range
            ref={forwardRef}
            {...props}
            className={st(classes.range, props.className)}
        />
    );
});

export const SliderThumb: typeof RadixSlider.Thumb = React.forwardRef(function SliderThumb(
    props,
    forwardRef
) {
    return (
        <RadixSlider.Thumb
            ref={forwardRef}
            {...props}
            className={st(classes.thumb, props.className)}
        />
    );
});

/* 
  <Slider.Root>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
  </Slider.Root>
*/
