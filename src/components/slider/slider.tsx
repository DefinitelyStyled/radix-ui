import * as RadixSlider from '@radix-ui/react-slider';
import { st, classes } from './slider.st.css';

export const Slider: React.FC<RadixSlider.SliderProps> = (props) => (
    <RadixSlider.Root {...props} className={st(classes.root, props.className)} />
);

export const SliderTrack: React.FC<RadixSlider.SliderTrackProps> = (props) => (
    <RadixSlider.Track {...props} className={st(classes.track, props.className)} />
);

export const SliderRange: React.FC<RadixSlider.SliderRangeProps> = (props) => (
    <RadixSlider.Range {...props} className={st(classes.range, props.className)} />
);

export const SliderThumb: React.FC<RadixSlider.SliderThumbProps> = (props) => (
    <RadixSlider.Thumb {...props} className={st(classes.thumb, props.className)} />
);

/* 
  <Slider.Root>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
  </Slider.Root>
*/
