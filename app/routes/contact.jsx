import { useLoaderData } from "@remix-run/react";

import { getClient } from "~/lib/sanity/getClient";
import Article from "~/components/Article";
import Form from "~/components/Form";

export async function loader({ request, params }) {
  const query = `*[_type == "page" && slug.current == "contact"]`;
  const initialData = await getClient().fetch(query);

  return {
    initialData,
  };
}

const ContactPage = () => {
  let { initialData } = useLoaderData();
  return (
    <>
      <Article content={initialData[0]} />
      <Form name={"Contact"} successUrl="/thank-you/" />
    </>
  );
};

export default ContactPage;
