import { gql } from 'graphql-request';
import Head from 'next/head';
import Image from 'next/image';
import { getData } from '../../utils/helpers';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const slugQuery = gql`
    {
      portfolioCollection {
        items {
          slug
        }
      }
    }
  `;
  const slugs = await getData(slugQuery);
  const paths = slugs.portfolioCollection.items.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // const workItem = work.filter((item) => item.slug == params.slug)[0];
  // return {
  //   props: {
  //     workItem,
  //   },
  // };
  const pageData = gql`
    {
      portfolioCollection(where: { slug: "${context.params.slug}" }) {
        items {
          siteName
          desc {
            json
          }
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `;
  const pageInfo = await getData(pageData);
  console.log(context);
  return {
    props: {
      page: pageInfo.portfolioCollection.items[0],
    },
  };
}
export default function WorkItem({ page }) {
  console.log(page);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="title">{page.siteName}</h1>
      <section>
        <Image
          src={page.thumbnail.url}
          layout="responsive"
          height="1080"
          width="1920"
          objectFit="cover"
        ></Image>
        <div>{documentToReactComponents(page.desc.json)}</div>
      </section>
    </Layout>
  );
}
