import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

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
        <div className="mainContent">{children}</div>
        <motion.nav
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.nav>
      </main>
      <footer>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="homeLink"
          >
            <path
              strokeLinecap="round"
              trokeLinejoin="round"
              strokeWidth="3"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </footer>
    </div>
  );
}
