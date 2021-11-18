import React, { Component } from 'react'
import classes from './about.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import useTranslation from 'next-translate/useTranslation';

export default function about() {
    let { t } = useTranslation();

    return (
        <div className={classes.box} id="about">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <span className={classes.head}>{t('common:ABOUTME')}</span>
                <h2 className={classes.heading}>{t('common:WhoAmI')}</h2>
                <div className={classes.About}>
                    <p> {t('common:about1')}  </p>
                    <p className={classes.br}>{t('common:about2')}
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    );
}

