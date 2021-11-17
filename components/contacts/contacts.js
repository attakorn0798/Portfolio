import { Form, Input, Button, Checkbox } from 'antd';
import React, { useState, Component } from 'react';
import emailjs from 'emailjs-com';
import styles from './contacts.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function contacts() {
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
                    <h2 className={styles.heading}>Contact</h2>
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
                    label="Subject"
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
                    label="Name"
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
                    label="Email"
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
                    label="Message"
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
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

