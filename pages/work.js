import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import work from '../data/workData';

export async function getStaticProps() {
  return {
    props: {
      work,
    },
  };
}
export default function Work({ work }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='title'>Work</h1>
      {work.map((item) => (
        <h2>{item.title}</h2>
      ))}
      <section></section>
    </Layout>
  );
}
