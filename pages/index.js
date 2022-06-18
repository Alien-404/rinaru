import Card from '../src/components/Card';
import Layout from '../src/components/Layout';
import CardItem from '../src/components/partials/CardItem';
import Hero from '../src/components/partials/Hero';
import getLimitProject from '../src/lib/get-limit-project';

export default function Home({ projects }) {
  return (
    <Layout title={'Home pages | Rinaru'}>
      <div className='h-full'>
        <Hero />
        <Card btnLink={'/portfolio'} headingTitle={'Recent Projects'}>
          {projects &&
            projects.map((project) => {
              const { name, id, tags, slug, image, description } = project;
              return (
                <CardItem
                  name={name}
                  key={id}
                  slug={slug}
                  image={image[0]}
                  tags={tags}
                  description={description}
                />
              );
            })}
        </Card>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { projects } = await getLimitProject({ limit: 6 });

  return {
    props: {
      projects,
    },
  };
}
