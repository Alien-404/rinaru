import Feature from '../src/components/Feature';
import Layout from '../src/components/Layout';
import Section from '../src/components/Section';
import Skill from '../src/components/Skill';
import TerminalUI from '../src/components/TerminalUI';
import getAllSectionSkill from '../src/lib/get-all-section-skill';

export default function about({ skills, sections }) {
  return (
    <Layout title={'About | Rinaru'}>
      <Feature />
      <TerminalUI />
      <Section sections={sections} />
      <Skill skills={skills} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { skills, sections } = await getAllSectionSkill();

  return {
    props: {
      skills,
      sections,
    },
    revalidate: 30, // In seconds
  };
}
