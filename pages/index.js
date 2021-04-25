import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Willbuilt.co.uk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
          Will Foster<br></br>Web Developer
        </h1>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        &nbsp;&nbsp;Made by&nbsp;<strong>Will</strong>&nbsp;📐🤓 📏
      </footer>
    </div>
  );
}
