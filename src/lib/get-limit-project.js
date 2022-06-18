import graphcmsClient, { gql } from '../config/Graphcms.config';

const getLimitProjectQuery = gql`
  query getLimitProject($limit: Int!) {
    projects(first: $limit) {
      name
      id
      image {
        url
      }
      slug
      description {
        raw
      }
      tags
    }
  }
`;

async function getLimitProject({ limit }) {
  const { projects } = await graphcmsClient.request(getLimitProjectQuery, {
    limit,
  });

  return {
    projects,
  };
}

export default getLimitProject;
