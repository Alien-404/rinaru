import graphcmsClient, { gql } from '../config/Graphcms.config';

const getProjectSlugQuery = gql`
  {
    projects {
      slug
    }
  }
`;

async function getProjectSlug() {
  const { projects } = await graphcmsClient.request(getProjectSlugQuery);

  return {
    projects,
  };
}

export default getProjectSlug;
