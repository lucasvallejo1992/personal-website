import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = (type = 'posts') => fs.readdirSync(path.join(root, 'data', type))

export const getFileBySlug = async (slug, type = 'posts', withContent = true) => {
  const mdxSource = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = matter(mdxSource);

  // Todo: add plugin prism or mdxprism
  return {
    content: withContent ? await serialize(content, {}) : null,
    data: {
      slug,
      ...data
    }
  }
};

export const getAllFilesMetadata = async () => {
  const files = getFiles();

  return files.reduce(async (promissedPosts, postSlug) => {
    const slug = postSlug.replace('.mdx', '');
    const post = await getFileBySlug(slug, 'posts', false);
    const posts = await promissedPosts;

    return [post, ...posts];
  }, Promise.resolve([]));
};