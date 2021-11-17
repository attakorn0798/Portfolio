import React, { Component } from 'react'
import classes from './about.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function about() {
    return (
        <div className={classes.box} id="about">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <span className={classes.head}>ABOUT ME</span>
                <h2 className={classes.heading}>Who Am I?</h2>
                <div className={classes.About}>
                    <p> My name is Attakorn Taname. I am a computer engineer interested in web development, mobile application development, game development.  </p>
                    <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    );
}

