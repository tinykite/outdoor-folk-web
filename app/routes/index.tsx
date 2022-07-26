import { Link, useLoaderData } from "@remix-run/react";

import { getClient } from "../lib/sanity/getClient";
import Article from "~/components/Article";

export function meta() {
  return {
    title: "Outdoor Folk",
    description: "Writing at the intersection of nature, art, and play",
  };
}

export async function loader() {
  const posts = await getClient().fetch(
    `*[_type == "post"]{ _id, title, slug, body, description }`
  );

  return { posts };
}

export default function Index() {
  let { posts } = useLoaderData();

  return (
    <div>
      {posts?.length >= 1
        ? posts.map((post: any) => (
            <Article content={post} previewContent={true} key={post._id} />
          ))
        : null}
    </div>
  );
}
