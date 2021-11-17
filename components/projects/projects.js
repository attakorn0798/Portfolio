import React, { Component } from 'react'
import styles from './projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Layout, Menu, Breadcrumb, Image, Row, Col, DemoBox, Card } from 'antd';

export default function certificates() {
    const { Meta } = Card;
    return (
        <>
        <div className={styles.box} id="projects">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <h2 className={styles.heading}>Projects</h2>
            </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
        <Row justify="left" align="top" gutter={[0, 0]}>
                        <Col span={18} push={6}>
                        <p>fsdf</p>
                        </Col>
                        <Col span={6} pull={18} >
                        <img alt="example" src='images/certificates/M001.jpg' className={styles.image_container}/>
                        </Col>
                    </Row>
        </ScrollAnimation>
        </div>
        </>
    );
}
