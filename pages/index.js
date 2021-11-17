import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Image, Button, BackTop } from 'antd';
import {
  FacebookOutlined,
  FileOutlined,
  MailFilled,
  InstagramOutlined
} from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import ReactTypingEffect from 'react-typing-effect'
import Sidebar from '../components/slidebar/sidebar'
import About from '../components/about_me/about'
import Education from '../components/education/education'
import Skills from '../components/skills/skills'
import Link from 'next/link'
import Certificates from '../components/certificates/certificates'
import Projects from '../components/projects/projects'
import Contacts from '../components/contacts/contacts'
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export function getStaticProps({ locales }) {
    return {
        props: { locales }
    }
}

function Home() {
  const [visible, setVisible] = useState(false);
  const router = useRouter()
  let { t } = useTranslation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className={styles.site_layout}>
        <Content style={{ margin: '0 16px' }}>
        <div className={styles.locale}>
                {router.locales.map((locale, index) => (
                    <div key={locale} className={index == 0 ? styles['locale-first-link'] : styles['locale-link']}>
                        <Link href={router.asPath} locale={locale}>
                            <a className={router.locale == locale ? styles['locale-selected'] : ''}>{locale}</a>
                        </Link>
                    </div>
                ))}
            </div>
          <h1 className={styles.title}>
          Welcome {t('common:Home')}
        </h1>
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
            <ReactTypingEffect text={[t('common:Name')]} speed={80} eraseDelay={200} className={styles.name} />
            <Button type="primary" shape="round" href="https://google.com" className="h1" style={{ background: "linear-gradient(to left,rgba(75,19,79,0.8) ,rgba(201,75,75,0.6))", borderColor: "black", }}>
              VIEW MY CV<FileOutlined />
            </Button>
          </div>
          <About />
          <Education />
          <Skills />
          <Certificates />
          <Contacts />
          <BackTop />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <a href="https://www.facebook.com/flim.lnw/" type="message" style={{ fontSize: '28px', color: 'blue', marginRight: '48px' }} theme="outlined" ><FacebookOutlined /></a>
          <a href="https://www.instagram.com/flim_kun/" type="message" style={{ fontSize: '28px', color: 'pink', marginRight: '48px' }} theme="outlined"><InstagramOutlined /></a>
          <a href="mailto:attakorntaname@gmail.com" type="message" style={{ fontSize: '28px', color: '#08c', marginRight: '48px' }} theme="outlined"><MailFilled /></a>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;