import { useLoaderData } from "@remix-run/react";

import { getClient } from "~/lib/sanity/getClient";
import Article from "~/components/Article";

export async function loader({ request, params }: any) {
  const query = `*[_type == "page" && slug.current == "thank-you"]`;
  const initialData = await getClient().fetch(query);

  return {
    initialData,
  };
}

const ThankYouPage = () => {
  let { initialData } = useLoaderData();
  return (
    <>
      <Article content={initialData[0]} />
    </>
  );
};

export default ThankYouPage;
