import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Willbuilt.co.uk - Well built websites';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="description" content="Will Foster portfolio" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="work">
              <a>Work</a>
            </Link>
          </li>
          <main>{children}</main>
        </ul>
      </nav>
    </div>
  );
}
