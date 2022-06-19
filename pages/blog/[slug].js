import Layout from '../../src/components/Layout';
import BlogDetail from '../../src/components/BlogDetail';
import getPostSlug from '../../src/lib/get-post-slug-';
import getPostWithSlug from '../../src/lib/get-post-with-slug';
import BlogSkeleton from '../../src/components/skeletons/BlogSkeleton';

export default function PostDetail({ post }) {
  if (!post) return <BlogSkeleton />;

  const { title, tags, content, coverImage, date } = post;
  return (
    <Layout title={`${title} | Rinaru `}>
      <BlogDetail
        title={title}
        tags={tags}
        image={coverImage}
        date={date}
        content={content}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { post } = await getPostWithSlug({ slug });

  if (post === null) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const { posts } = await getPostSlug();

  // Get the paths we want to pre-render based on post
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: true };
}
