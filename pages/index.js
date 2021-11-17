import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Image, Button, BackTop } from 'antd';
import {
  FileOutlined,
} from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import ReactTypingEffect from 'react-typing-effect'
import Sidebar from '../components/slidebar/sidebar'
import About from '../components/about_me/about'
import Education from '../components/education/education'
import Skills from '../components/skills/skills'
import Link from 'next/link'
import Certificates from '../components/certificates/certificates'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className={styles.site_layout}>
        <Content style={{ margin: '0 16px' }}>
          <div className={styles['condiv']} style={{ padding: 24 }}>
            <Image
              className={styles.profilepic}
              preview={{ visible: false }}
              src='images/2.jpeg'
              onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                <Image src='images/2.jpeg' />
                <Image src='images/1.jpeg' />
                <Image src='images/3.jpeg' />
                <Image src='images/4.jpeg' />
              </Image.PreviewGroup>
            </div>
            <ReactTypingEffect text={['Attakorn Taname']} speed={80} eraseDelay={200} className={styles.name} />
            <Button type="primary" shape="round" href="https://google.com" className="h1" style={{ background: "linear-gradient(to left,rgba(75,19,79,0.8) ,rgba(201,75,75,0.6))", borderColor: "black", }}>
              VIEW MY CV<FileOutlined />
            </Button>
          </div>
          <About />
          <Education />
          <Skills />
          <Certificates/>
          <BackTop />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Portfolio Created by FLIM</Footer>
      </Layout>
    </Layout>
  );
}

export default Home;