import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import { getClient } from "~/lib/sanity/getClient";
import { filterDataToSingleItem } from "~/lib/sanity/filterDataToSingleItem";
import Preview from "~/components/Preview";
import Article from "~/components/Article";

export async function loader({ request, params }: any) {
  const requestUrl = new URL(request?.url);
  const preview =
    requestUrl?.searchParams?.get("preview") ===
    process.env.SANITY_PREVIEW_SECRET;

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!
  const initialData = await getClient(preview).fetch(
    `*[_type == "post" && slug.current == $slug]`,
    { slug: params.slug }
  );

  return { initialData, preview };
}

const ArticleDetail = () => {
  let { initialData, preview } = useLoaderData();

  // Bonus, a helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const content = filterDataToSingleItem(initialData, preview);

  return (
    <>
      {preview ? <div>Preview Mode Enabled</div> : null}
      <Article content={content} />
    </>
  );
};

export default ArticleDetail;
