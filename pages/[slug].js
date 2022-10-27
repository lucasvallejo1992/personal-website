import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../components/MDXComponents";
import { getFiles, getFileBySlug } from "../lib/mdx";

export default function Post({ content, data }) {
  return (
      <MDXRemote {...content} components={MDXComponents} />
  );
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { content, data } = await getFileBySlug(params.slug);

  return {
    props: {
      content,
      data,
    },
  };
}
