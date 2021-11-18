import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Image, Row, Col, DemoBox, Card } from 'antd';
import styles from './skills.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import useTranslation from 'next-translate/useTranslation';

export default function skills() {
    let { t } = useTranslation();
    const { Meta } = Card;
    const style = { background: '#0092ff', padding: '8px 0' };
    return (
        <>
        <div className={styles.box} id="skills">
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible={true}>
                <span className={styles.head}>{t('common:skills')}</span>
                <h2 className={styles.heading}>{t('common:tech')}</h2>
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
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/css.svg' />}
                            >
                                <Meta description="CSS"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/bootstrapr.svg' />}
                            >
                                <Meta description="Bootstap"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/ant.png' />}
                            >
                                <Meta description="Ant Design"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/mongo.jpg' />}
                            >
                                <Meta description="MongoDB"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/Sqlite.svg.png' />}
                            >
                                <Meta description="Sqlite"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/firebase.com.png' />}
                            >
                                <Meta description="Firebase"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/Git.png' />}
                            >
                                <Meta description="Git"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/unity.com.png' />}
                            >
                                <Meta description="Unity"
                                    className={styles.title} />
                            </Card>
                        </Col>
                        <Col xs={42} sm={7} lg={6} md={7} xl={3}>
                            <Card
                                hoverable
                                className={styles.image_container}
                                cover={<img alt="example" src='images/skills/expo.png' />}
                            >
                                <Meta description="Expo"
                                    className={styles.title} />
                            </Card>
                        </Col>
                    </Row>
                </div>
        </>
    );
}