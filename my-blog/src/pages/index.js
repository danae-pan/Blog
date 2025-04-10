import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures'; // Custom profile section component
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGif}>
          <img
            src="/Blog/img/logo1.gif"  // Path to your GIF
            alt="Penetration Testing GIF"
            className={styles.gifImage}
          />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Penetration Testing Journal"
      description="My journey through penetration testing and red teaming">
      <HomepageHeader />
      <main>
        <HomepageFeatures />  
      </main>
    </Layout>
  );
}
