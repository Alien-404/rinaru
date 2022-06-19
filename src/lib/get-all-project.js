import graphcmsClient, { gql } from '../config/Graphcms.config';

const getAllProjectQuery = gql`
  {
    projects(orderBy: createdAt_DESC) {
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

async function getAllProject() {
  const { projects } = await graphcmsClient.request(getAllProjectQuery);

  return {
    projects,
  };
}

export default getAllProject;
