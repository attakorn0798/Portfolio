import 'antd/dist/antd.css'
import React, { useState, Component } from 'react';
import { Layout, Menu, Breadcrumb, Image, Icon } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
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
            <Sider collapsible collapsed={this.state.collapsed} onClick={this.toggle} onCollapse={this.onCollapse} collapsedWidth={0} style={{
                left: 0,
                zIndex: 1000,
            }}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" mode="vertical">
                    <Menu.Item key="1" icon={<PieChartOutlined />} smooth to="/#about" >
                        <Link href="/#about" className="links">About</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link href="/#education" className="links">Education</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default sidebar;