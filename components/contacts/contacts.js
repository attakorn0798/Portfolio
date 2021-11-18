import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState, Component } from 'react';
import emailjs from 'emailjs-com';
import styles from './contacts.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import useTranslation from 'next-translate/useTranslation';

export default function contacts() {
    let { t } = useTranslation();
    const [form] = Form.useForm();

    const onFinish = (formData) => {
        emailjs.send(
            'service_zdj5l4i',
            'template_n2q9jvd',
            formData,
            'user_Ao1dEwFdJyqFnSZPMIvtp'
        )
            .then((result) => {
                console.log(result.text);
                alert("success");
                form.resetFields();
            }, (error) => {
                console.log(error.text);
            });
        reset();
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={styles.box} id="contact">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                    <h2 className={styles.heading}>{t('common:Contact')}</h2>
                </ScrollAnimation>
            </div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onSub
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label={t('common:Subject')}
                    name="subject"
                    type="subject"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Subject!',
                        },
                    ]}
                >
                    <Input type="subject" name="subject" value="subject" />
                </Form.Item>
                <Form.Item
                    label={t('common:Namee')}
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input value="name" />
                </Form.Item>
                <Form.Item
                    label={t('common:Email')}
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input value="email" />
                </Form.Item>
                <Form.Item
                    label={t('common:Message')}
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Message!',
                        },
                    ]}
                >
                    <Input value="message" />
                </Form.Item >
                <Form.Item wrapperCol={{
                    xs: { span: 0, offset: 0 },
                    sm: { span: 8, offset: 8 },
                }}
                >
                    <Button type="primary" htmlType="submit" style={{ marginRight: "8px" }}>
                    {t('common:Submit')}
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                    {t('common:Reset')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

