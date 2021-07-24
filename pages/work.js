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
          order
          shortDesc {
            json
          }
          cat
          desc {
            json
          }
          slug
          thumbnail {
            url
          }
          codeUrl
          demoUrl
        }
      }
    }
  `;
  const portfolio = await getData(query);
  const sortedPortfolio = portfolio.portfolioCollection.items;
  sortedPortfolio.sort((a, b) => a.order - b.order);
  return {
    props: {
      portfolio: sortedPortfolio,
    },
  };
}
export default function Work({ work, portfolio }) {
  // console.log(portfolio);
  return (
    <Layout>
      <h1 className="title">Work</h1>
      <section>
        <p>
          Below are some examples of some things that I have been dabbling in.
        </p>
        <div className={styles.container}>
          {portfolio.map((item, index) => (
            <Card key={index} portfolio={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
