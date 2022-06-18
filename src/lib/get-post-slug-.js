import graphcmsClient, { gql } from '../config/Graphcms.config';

const getPostSlugQuery = gql`
  {
    posts {
      slug
    }
  }
`;

async function getPostSlug() {
  const { posts } = await graphcmsClient.request(getPostSlugQuery);

  return {
    posts,
  };
}

export default getPostSlug;
