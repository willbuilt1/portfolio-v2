import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Willbuilt.co.uk</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <Link href='/about'>
          <a className={styles.link}>
            <span className={styles.link__initial}>Hi.</span>
            <span className={styles.link__location}>About</span>
          </a>
        </Link>
        <Link href='/about'>
          <a className={styles.link}>
            <span
              className={`${styles.link__initial} ${styles.link__initialMid}`}
            >
              I am
            </span>
            <span className={styles.link__location}>Work</span>
          </a>
        </Link>
        <Link href='/about'>
          <a className={styles.link}>
            <span
              className={`${styles.link__initial} ${styles.link__initialBottom}`}
            >
              Will
            </span>
            <span className={styles.link__location}>Contact</span>
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
