import React from 'react';
import { classes } from './progress-demo.st.css';
import { Progress, ProgressIndicator } from '../components/progress/progress';

interface ProgressDemoProps {
    className?: string;
}

const ProgressDemo: React.FunctionComponent<ProgressDemoProps> = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress value={progress}>
            <ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Progress>
    );
};
export default ProgressDemo;
