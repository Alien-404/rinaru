import graphcmsClient, { gql } from '../config/Graphcms.config';

const getAllPostQuery = gql`
  {
    posts {
      id
      title
      slug
      tags
      coverImage {
        url
      }
      content {
        raw
      }
    }
  }
`;

async function getAllPost() {
  const { posts } = await graphcmsClient.request(getAllPostQuery);

  return {
    posts,
  };
}

export default getAllPost;
