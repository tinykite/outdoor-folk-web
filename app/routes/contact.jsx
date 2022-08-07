import { useLoaderData } from "@remix-run/react";

import { getClient } from "~/lib/sanity/getClient";
import Article from "~/components/Article";
import Form from "~/components/Form";
import styled from "styled-components";

const Main = styled.main`
  width: 90%;
  margin: 0 auto;
`;

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
    <Main>
      <Article content={initialData[0]} />
      <Form name={"Contact"} successUrl="/thank-you/" />
    </Main>
  );
};

export default ContactPage;
