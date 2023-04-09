import React from 'react';
import { classes, st } from './toast-demo.st.css';
import {
    Toast,
    ToastAction,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '../components/toast/toast';

interface ToastDemoProps {
    className?: string;
}

const ToastDemo: React.FunctionComponent<ToastDemoProps> = () => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <ToastProvider swipeDirection="right">
            <button
                className={st(classes.button, classes.large, classes.violet)}
                onClick={() => {
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        eventDateRef.current = oneWeekAway();
                        setOpen(true);
                    }, 100);
                }}
            >
                Add to calendar
            </button>

            <Toast open={open} onOpenChange={setOpen}>
                <ToastTitle>Scheduled: Catch up</ToastTitle>
                <ToastDescription asChild>
                    <time dateTime={eventDateRef.current.toISOString()}>
                        {prettyDate(eventDateRef.current)}
                    </time>
                </ToastDescription>
                <ToastAction asChild altText="Goto schedule to undo">
                    <button className={st(classes.button, classes.small, classes.green)}>
                        Undo
                    </button>
                </ToastAction>
            </Toast>
            <ToastViewport />
        </ToastProvider>
    );
};

function oneWeekAway() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}

function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {}).format(date);
}

export default ToastDemo;
