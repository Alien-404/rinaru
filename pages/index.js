import { NextSeo } from 'next-seo';
import Card from '../src/components/Card';
import Layout from '../src/components/Layout';
import CardItem from '../src/components/partials/CardItem';
import Hero from '../src/components/partials/Hero';
import getLimitProject from '../src/lib/get-limit-project';

export default function Home({ projects }) {
  return (
    <Layout title={'Home pages | Rinaru'}>
      <NextSeo
        title='Rinaru | Rico'
        description='Hi I am rico, backend web developer. I am a backend web developer at weekgenz company.'
        openGraph={{
          type: 'website',
          url: 'https://rinaru.com',
          title: `Rinaru | Backend website developer`,
          description:
            'Hi I am rico, backend web developer. I am a backend web developer at weekgenz company.',
          locale: 'en_ID',
          images: [
            {
              url: 'https://www.rinaru.com/_next/image?url=%2Fimage%2Fprofile.jpg&w=750&q=75',
              width: 800,
              height: 600,
              alt: 'Rinaru | Rico',
            },
          ],
          site_name: 'rinaru.com',
        }}
      />
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
    revalidate: 30, // In seconds
  };
}
