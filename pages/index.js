import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [showLinks, setshowLinks] = useState(false);

  const handleHover = () => console.log('hoverring');
  // const handleHover = () => setshowLinks(!showLinks);
  return (
    <div className='container'>
      <Head>
        <title>Willbuilt.co.uk</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <Link href='/about'>
          <a className={styles.link}>
            <div className={styles.link__container}>
              <span className={styles.link__initial} onMouseEnter={handleHover}>
                Hi.
              </span>
              <span className={styles.link__location}>About</span>
            </div>
          </a>
        </Link>
        <Link href='/about'>
          <a className={styles.link}>
            <div className={`${styles.link__container} ${styles.delay02}`}>
              <span className={styles.link__initial}>I am</span>
              <span className={styles.link__location}>Work</span>
            </div>
          </a>
        </Link>
        <Link href='/about'>
          <a className={styles.link}>
            <div className={`${styles.link__container} ${styles.delay03}`}>
              <span className={`${styles.link__initial} `}>Will</span>
              <span className={styles.link__location}>Contact</span>
            </div>
          </a>
        </Link>
      </main>

      {/* <footer className='footer'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
        </a>
        &nbsp;&nbsp;Made by&nbsp;<strong>Will</strong>&nbsp;📐🤓 📏
      </footer> */}
    </div>
  );
}
