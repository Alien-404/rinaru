import Layout from '../../src/components/Layout';
import PortDetail from '../../src/components/PortDetail';
import PortSkeleton from '../../src/components/skeletons/PortSkeleton';
import getProjectSlug from '../../src/lib/get-project-slug';
import getProjectWithSlug from '../../src/lib/get-project-with-slug';

export default function detailPortfolio({ project }) {
  if (!project) return <PortSkeleton />;
  const { name, description, image, tags, demo, sourceCode } = project;
  return (
    <Layout title={`${project.name} | Rinaru`}>
      {project && (
        <PortDetail
          name={name}
          image={image[0]}
          tags={tags}
          demo={demo}
          sourceCode={sourceCode}
          description={description}
        />
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { project } = await getProjectWithSlug({ slug });

  if (project === null) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const { projects } = await getProjectSlug();

  // Get the paths we want to pre-render based on project
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: true };
}
