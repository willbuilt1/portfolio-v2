import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import work from '../data/workData';
import styles from '../styles/components/Work.module.scss';
import Card from '../components/Card';

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
      <section>
        <div className={styles.container}>
          {work.map((item, index) => (
            <Card key={index} work={item} />
          ))}
        </div>
      </section>

      <section></section>
    </Layout>
  );
}
