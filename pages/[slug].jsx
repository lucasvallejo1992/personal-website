import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../components/MDXComponents";
import { getFiles, getFileBySlug } from "../lib/mdx";
import { Avatar } from "../components/Avatar";

export default function Post({ content, data }) {
  return (
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div class="max-w-2xl">
        <Avatar
          name="Lucas Vallejo"
          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          date={data.date}
          readTime={data.readTime}
        />
        <div className="space-y-5 md:space-y-8">
          <MDXRemote {...content} components={MDXComponents} />
        </div>
      </div>
    </div>
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
