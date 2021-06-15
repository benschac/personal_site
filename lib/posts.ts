// ./lib/posts.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";

//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "posts");

function getFileData(file) {
  const slug = file.replace(".mdx", "");
  const fullPath = path.join(postDirectory, file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  console.log(content);

  return {
    data,
    slug,
    content,
    date: new Date(data.date).toLocaleDateString("en-US"),
  };
}

export function getSlugs() {
  const files = fs.readdirSync(postDirectory);

  return files.map((file) => {
    return {
      params: {
        slug: file.replace(".mdx", ""),
      },
    };
  });
}

export function getPost(slug) {
  const postPath = path.join(postDirectory, `${slug}.mdx`);
  const post = fs.readFileSync(postPath, "utf8");

  return post;
}

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const { data, slug, date } = getFileData(filename);

    const frontMatter = {
      ...data,
      date,
    };

    return {
      slug,
      ...frontMatter,
    };
  });

  const postsSortedByDate = allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else if (new Date(a.date) > new Date(b.date)) {
      return -1;
    } else {
      return 0;
    }
  });

  return postsSortedByDate;
};
