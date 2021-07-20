import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../../components/layout';
import work from '../../data/workData';

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = work.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const workItem = work.filter((item) => item.slug == params.slug)[0];
  return {
    props: {
      workItem,
    },
  };
}
export default function WorkItem({ workItem }) {
  console.log(workItem.title);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className='title'>{workItem.title}</h1>
      <section></section>
    </Layout>
  );
}
