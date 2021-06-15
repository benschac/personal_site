import { x } from "@xstyled/styled-components";
import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  console.log(link);
  return (
    <x.article>
      <HeadPost isBlogPost={true} meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more →</a>
      </Link>
    </x.article>
  );
};
