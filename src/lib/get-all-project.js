import graphcmsClient, { gql } from '../config/Graphcms.config';

const getAllProjectQuery = gql`
  {
    projects {
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
