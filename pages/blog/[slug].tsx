import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

import { getPost, getSlugs } from "../../lib/posts";
import { H1, H3, P } from "../../components/Typography";
import { x } from "@xstyled/styled-components";

const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H3 {...props} />,
  h3: (props) => <H3 {...props} />,
  p: (props) => <P {...props} />,
};

export default function Posts(props) {
  const { source, post } = props;

  return (
    <x.div padding={{ md: 3 }}>
      <MDXRemote components={components} {...source}>
        <Head>{post.title}</Head>
        <div>
          <x.div paddingRight={{ _: 2, md: 4 }} paddingLeft={{ _: 2, md: 4 }}>
            <x.div paddingRight={{ _: 2, md: 4 }} paddingLeft={{ _: 2, md: 4 }}>
              {source}
            </x.div>
          </x.div>
        </div>
      </MDXRemote>
    </x.div>
  );
}

export function getStaticPaths() {
  const paths = getSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postContent = getPost(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      post: data,
    },
  };
}
