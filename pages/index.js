import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Willbuilt.co.uk</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <div className={styles.container}>
          <Link href='/about'>
            <a className={styles.link}>
              <div className={styles.link__container}>
                <h1 className={styles.link__initial}>Hi.</h1>
                <h1 className={styles.link__location}>About</h1>
              </div>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.link}>
              <div className={`${styles.link__container} ${styles.delay02}`}>
                <h1 className={styles.link__initial}>I am</h1>
                <h1 className={styles.link__location}>Work</h1>
              </div>
            </a>
          </Link>
          <Link href='/about'>
            <a className={styles.link}>
              <div className={`${styles.link__container} ${styles.delay03}`}>
                <h1 className={`${styles.link__initial} `}>Will</h1>
                <h1 className={styles.link__location}>Contact</h1>
              </div>
            </a>
          </Link>
        </div>
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
    </>
  );
}
