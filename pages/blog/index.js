import Blog from '../../src/components/Blog';
import Layout from '../../src/components/Layout';
import BlogItem from '../../src/components/partials/BlogItem';
import getAllPost from '../../src/lib/get-all-post';

export default function index({ posts }) {
  return (
    <Layout title={'Blog Posts | Rinaru'}>
      <Blog headingTitle={'Blog Posts'}>
        {posts &&
          posts.map((post) => {
            const { id, title, coverImage, tags, content, slug } = post;
            return (
              <BlogItem
                key={id}
                title={title}
                image={coverImage}
                tags={tags}
                slug={slug}
                content={content}
              />
            );
          })}
      </Blog>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts } = await getAllPost();

  return {
    props: {
      posts,
    },
    revalidate: 30, // In seconds
  };
}
