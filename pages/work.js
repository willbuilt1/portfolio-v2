import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Work</h1>
    </Layout>
  );
}
