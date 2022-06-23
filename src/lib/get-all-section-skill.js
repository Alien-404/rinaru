import graphcmsClient, { gql } from '../config/Graphcms.config';

const getAllSectionSkillQuery = gql`
  {
    skills(orderBy: dateLearned_ASC) {
      id
      skill
      dateLearned
      skillDescription
    }
    sections {
      id
      title
      description
    }
  }
`;

async function getAllSectionSkill() {
  const { skills, sections } = await graphcmsClient.request(
    getAllSectionSkillQuery
  );

  return {
    skills,
    sections,
  };
}

export default getAllSectionSkill;
