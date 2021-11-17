import React, { Component } from 'react'
import styles from './certificates.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Layout, Menu, Breadcrumb, Image, Row, Col, DemoBox, Card } from 'antd';

export default function certificates() {
    const { Meta } = Card;
    return (
        <>
        <div className={styles.box} id="certificates">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <h2 className={styles.heading}>Certificates</h2>
            </ScrollAnimation>
        </div>
        <div className={styles.grid}>
                    <Row justify="center" align="top" gutter={[0, 8]}>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/js.svg.png' />}
                            >
                                <Meta
                                    description="JavaScript"
                                    className={styles.title}
                                />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/react.png' />}
                            >
                                <Meta description="React"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/Nextjs.svg.png' />}
                            >
                                <Meta description="Next.js"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/html5.png' />}
                            >
                                <Meta description="HTML5"
                                    className={styles.title} />
                            </Card>
                        </Col>
                    </Row>
                </div>
        </>
    );
}
