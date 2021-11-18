import React, { Component } from 'react';
import classes from './education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import useTranslation from 'next-translate/useTranslation';


function Education() {
    let { t } = useTranslation();
        return (
                <div className={classes.box} id="education">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>{t('common:exp')}</span>
                     <h2 className={classes.heading}>{t('common:EDUCATION')}</h2>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >{t('common:school')}<span>{t('common:sy')}</span></h2>
                                                <p>{t('common:schooldes')}</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >{t('common:univercity')}<span>{t('common:uy')}</span></h2>
                                                <p>{t('common:udes')}</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        );
    
}

export default Education;