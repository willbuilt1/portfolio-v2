import Head from 'next/head';
import { gql } from 'graphql-request';
import Layout, { siteTitle } from '../components/layout';
import { getData } from '../utils/helpers';
import styles from '../styles/components/Work.module.scss';
import Card from '../components/Card';

export async function getStaticProps() {
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
  const portfolio = await getData(query);
  return {
    props: {
      portfolio: portfolio.portfolioCollection.items,
    },
  };
}
export default function Work({ work, portfolio }) {
  return (
    <Layout>
      <h1 className="title">Work</h1>
      <section>
        <div className={styles.container}>
          {portfolio.map((item, index) => (
            <Card key={index} portfolio={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
