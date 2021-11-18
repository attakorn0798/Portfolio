import 'antd/dist/antd.css'
import React, { useState, Component } from 'react';
import { Layout, Menu, Breadcrumb, Image, Icon } from 'antd';
import {
    BookOutlined,
    DesktopOutlined,
    MailOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link'
import styles from './sidebar.module.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class sidebar extends React.Component {
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
            <Sider collapsible collapsed={this.state.collapsed} onClick={this.toggle} onCollapse={this.onCollapse} collapsedWidth={0} className={styles.sider}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" mode="vertical">
                <Menu.Item key="1" >
                        <Link href="/" className="links">ATTAKORN TANAME</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />} >
                        <Link href="/#about" className="links">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BookOutlined />}>
                        <Link href="/#education" className="links">Education</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<DesktopOutlined />} title="Skills">
                        <Menu.Item key="4"><Link href="/#skills" className="links">language and tech</Link></Menu.Item>
                        <Menu.Item key="5"><Link href="/#certificates" className="links">certificates</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<MailOutlined />}>
                    <Link href="/#contact" className="links">Contact</Link>
                    </Menu.Item>
                </Menu>              
            </Sider>
            <Layout>
            <Content
            className={this.state.collapsed ? "normal" : "mainContnet"}
            >
           
            {this.props.children}
            </Content>
          </Layout>
          </Layout>
        );
    }
}

export default sidebar;