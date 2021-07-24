import { gql } from 'graphql-request';
import styles from '../../styles/components/Slug.module.scss';

import Image from 'next/image';
import { getData } from '../../utils/helpers';
import Link from 'next/link';
import Layout from '../../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Category from '../../components/Cats';

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
          cat
          codeUrl
          demoUrl
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
      <h1 className="title">{page.siteName}</h1>
      <section>
        <div className={styles.image}>
          <Image
            src={page.thumbnail.url}
            layout="responsive"
            height="1080"
            width="1920"
            objectFit="cover"
            placeholder="blur"
            // className={styles.image}
          ></Image>
        </div>
        <div className={styles.cats}>
          {page.cat.map((category, index) => (
            <Category key={index} cat={category}></Category>
          ))}
        </div>
        <div>{documentToReactComponents(page.desc.json)}</div>
      </section>
    </Layout>
  );
}
