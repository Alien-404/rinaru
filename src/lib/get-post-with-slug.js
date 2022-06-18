import graphcmsClient, { gql } from '../config/Graphcms.config';

const getPostWithSlugQuery = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      date
      tags
      content {
        raw
      }
      coverImage {
        url
      }
    }
  }
`;

async function getPostWithSlug({ slug }) {
  const { post } = await graphcmsClient.request(getPostWithSlugQuery, {
    slug,
  });

  return {
    post,
  };
}

export default getPostWithSlug;
