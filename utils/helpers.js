import { GraphQLClient, gql } from 'graphql-request';

export const getData = async (glQuery) => {
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

  const data = await graphQLClient.request(glQuery);
  // console.log(JSON.stringify(data, undefined, 2));
  return data;
};

// const getPageData = async (slug) => {
//     const
// }
