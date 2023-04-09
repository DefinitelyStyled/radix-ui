import React from 'react';
import { classes, st } from './hover-card-demo.st.css';
import {
    HoverCard,
    HoverCardArrow,
    HoverCardContent,
    HoverCardPortal,
    HoverCardTrigger,
} from '../components/hover-card/hover-card';

interface HoverCardDemoProps {
    className?: string;
}

const HoverCardDemo: React.FunctionComponent<HoverCardDemoProps> = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a
                    className={classes.imageTrigger}
                    href="https://twitter.com/radix_ui"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img
                        className={st(classes.image, classes.normal)}
                        src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                        alt="Radix UI"
                    />
                </a>
            </HoverCardTrigger>
            <HoverCardPortal>
                <HoverCardContent sideOffset={5}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        <img
                            className="Image large"
                            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                            alt="Radix UI"
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div>
                                <div className={st(classes.text, classes.bold)}>Radix</div>
                                <div className={st(classes.text, classes.faded)}>@radix_ui</div>
                            </div>
                            <div className={classes.text}>
                                Components, icons, colors, and templates for building high-quality,
                                accessible UI. Free and open-source.
                            </div>
                            <div style={{ display: 'flex', gap: 15 }}>
                                <div style={{ display: 'flex', gap: 5 }}>
                                    <div className={st(classes.text, classes.bold)}>0</div>{' '}
                                    <div className={st(classes.text, classes.faded)}>Following</div>
                                </div>
                                <div style={{ display: 'flex', gap: 5 }}>
                                    <div className={st(classes.text, classes.bold)}>2,900</div>{' '}
                                    <div className={st(classes.text, classes.faded)}>Followers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <HoverCardArrow className="HoverCardArrow" />
                </HoverCardContent>
            </HoverCardPortal>
        </HoverCard>
    );
};

export default HoverCardDemo;
