import React, { Component } from 'react'
import styles from './certificates.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Layout, Menu, Breadcrumb, Image, Row, Col, DemoBox, Card } from 'antd';
import useTranslation from 'next-translate/useTranslation';

export default function certificates() {
    let { t } = useTranslation();
    const { Meta } = Card;
    return (
        <>
        <div className={styles.box} id="certificates">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                <h2 className={styles.heading}>{t('common:Certificates')}</h2>
            </ScrollAnimation>
        </div>
        <div className={styles.grid}>
                    <Row justify="center" align="top" gutter={[48, 0]}>
                    <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/res_web.PNG' />}
                            >
                                <Meta description="Responsive Web Design Developer Certificate"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/java.PNG' />}
                            >
                                <Meta description="JavaScript Algorithms and Data Structures Developer Certificate"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/M001.jpg' />}
                            >
                                <Meta
                                    description="MONGODB Basics"
                                    className={styles.title}
                                />
                            </Card>
                        </Col>
                        <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/sql.PNG' />}
                            >
                                <Meta description="Essential SQL for Everyone"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/comsci.PNG' />}
                            >
                                <Meta description="Introduce to Computer Science"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col flex="auto" xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<Image alt="example" src='images/certificates/toeic.jpeg' />}
                            >
                                <Meta description="TOEIC"
                                    className={styles.title} />
                            </Card>
                        </Col>
                    </Row>
                </div>
        </>
    );
}
