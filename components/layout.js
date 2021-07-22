import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const siteTitle = 'Willbuilt.co.uk - Well built websites';

export default function Layout({ children, href }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta name="description" content="Will Foster portfolio" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>

      <main className="subpages">
        <div>{children}</div>
        <nav>
          <Link href="/about">
            <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
          </Link>
          <Link href="/work">
            <a className={router.pathname == '/work' ? 'active' : ''}>Work</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? 'active' : ''}>
              contact
            </a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
