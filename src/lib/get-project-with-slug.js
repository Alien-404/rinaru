import graphcmsClient, { gql } from '../config/Graphcms.config';

const getProjectWithSlugQuery = gql`
  query project($slug: String!) {
    project(where: { slug: $slug }) {
      name
      id
      demo
      sourceCode
      image {
        url
      }
      tags
      description {
        raw
      }
    }
  }
`;

async function getProjectWithSlug({ slug }) {
  const { project } = await graphcmsClient.request(getProjectWithSlugQuery, {
    slug,
  });

  return {
    project,
  };
}

export default getProjectWithSlug;
