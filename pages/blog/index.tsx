import { Navigation } from "../../components/Navigation.component";
import { getSortedPosts } from "../../lib/posts";
import { H1, H3, P } from "../../components/Typography";
import Link from "next/link";

const Blog: React.FC<{ posts: [] }> = (props) => {
  const { posts } = props;
  return (
    <>
      <div>
        <Navigation />
        <ul>
          {posts.map(
            (post: { title: string; slug: string; excerpt: string }) => {
              return (
                <li key={post.slug}>
                  <H3>
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </H3>
                  <P>{post.excerpt}</P>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      posts: allPostsData,
    },
  };
}
