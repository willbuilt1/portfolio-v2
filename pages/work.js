import Head from 'next/head';
import Link from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import Layout, { siteTitle } from '../components/layout';
import work from '../data/workData';
import styles from '../styles/components/Work.module.scss';
import Card from '../components/Card';

export async function getStaticProps() {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  const query = gql`
    {
      portfolioCollection {
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

  const data = await graphQLClient.request(query);
  // console.log(JSON.stringify(data, undefined, 2));
  return {
    props: {
      work,
      data: data.portfolioCollection.items,
    },
  };
}
export default function Work({ work, data }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="title">Work</h1>
      <section>
        <div className={styles.container}>
          {data.map((item, index) => (
            <Card key={index} portfolio={item} />
          ))}
        </div>
      </section>

      <section></section>
    </Layout>
  );
}
