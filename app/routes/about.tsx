import { useLoaderData } from "@remix-run/react";

import { getClient } from "~/lib/sanity/getClient";
import Article from "~/components/Article";

export async function loader({ request, params }: any) {
  const query = `*[_type == "page" && slug.current == "about"]`;
  const initialData = await getClient().fetch(query);

  return {
    initialData,
  };
}

const AboutPage = () => {
  let { initialData } = useLoaderData();
  return (
    <>
      <Article content={initialData[0]} />
    </>
  );
};

export default AboutPage;
