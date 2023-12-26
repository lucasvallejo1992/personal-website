import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

// Helper function to build file path
const buildFilePath = (type, fileName = '') => path.join(root, 'data', type, fileName);

export const getFiles = (type = 'posts') => {
  try {
    return fs.readdirSync(buildFilePath(type));
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
};

export const getFileBySlug = async (slug, type = 'posts', withContent = true) => {
  try {
    const filePath = buildFilePath(type, `${slug}.mdx`);
    const mdxSource = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(mdxSource);

    return {
      content: withContent ? await serialize(content, {}) : null,
      data: {
        slug,
        ...data
      }
    };
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
};

export const getAllFilesMetadata = async () => {
  try {
    const files = getFiles();
    const postsPromises = files.map(async postSlug => {
      const slug = postSlug.replace('.mdx', '');
      return await getFileBySlug(slug, 'posts', false);
    });

    return await Promise.all(postsPromises);
  } catch (error) {
    console.error(`Error getting all files metadata: ${error.message}`);
    return [];
  }
};
