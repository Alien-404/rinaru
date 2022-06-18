import Card from '../../src/components/Card';
import Layout from '../../src/components/Layout';
import CardItem from '../../src/components/partials/CardItem';
import getAllProject from '../../src/lib/get-all-project';

export default function index({ projects }) {
  return (
    <Layout title={'Portfolio Pages | Rinaru'}>
      <Card headingTitle={'List of Projects I have created'}>
        {projects &&
          projects.map((project) => {
            const { name, slug, id, image, description, tags } = project;
            return (
              <CardItem
                key={id}
                name={name}
                slug={slug}
                image={image[0]}
                description={description}
                tags={tags}
              />
            );
          })}
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const { projects } = await getAllProject();

  return {
    props: {
      projects,
    },
    revalidate: 30, // In seconds
  };
}
