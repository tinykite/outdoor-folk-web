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
  const query = `*[_type == "post" && slug.current == $slug]`;
  const queryParams = { slug: params.slug };
  const initialData = await getClient(preview).fetch(query, queryParams);

  return {
    initialData,
    preview,
    // If `preview` mode is active, we'll need these for live updates
    query: preview ? query : null,
    queryParams: preview ? queryParams : null,
  };
}

const ArticleDetail = () => {
  let { initialData, preview, query, queryParams } = useLoaderData();

  // If `preview` mode is active, the <Preview /> component will update page data
  const [data, setData] = useState(initialData);

  // Bonus, a helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const content = filterDataToSingleItem(data, preview);

  return (
    <>
      {preview ? (
        <Preview
          data={data}
          setData={setData}
          query={query}
          queryParams={queryParams}
        />
      ) : null}
      <Article content={content} />
    </>
  );
};

export default ArticleDetail;
