import { useLoaderData } from "@remix-run/react";
import styled from "styled-components";

import { getClient } from "~/lib/sanity/getClient";
import Article from "~/components/Article";

const Form = styled.form`
  display: grid;
  justify-items: center;
  margin-top: 2rem;
`;

const InputContainer = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;

  & + & {
    margin-top: 2rem;
  }
`;

const Input = styled.input`
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const TextAreaInput = styled.textarea`
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export async function loader() {
  const query = `*[_type == "page" && slug.current == "contact"]`;
  const initialData = await getClient().fetch(query);

  return {
    initialData,
  };
}

const ContactPage = () => {
  let { initialData } = useLoaderData();

  // TODO: Refactor to use the built-in Remix Form component.
  // This functions as an escape hatch, and feels unnecessary.
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Netlify will accept form submissions to any valid URL
    // by submitting to a static file we skip Remix's POST catcher
    fetch("/favicon.ico", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        window.location.href = "/thank-you/";
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <Article content={initialData[0]}></Article>{" "}
      <form
        method="post"
        name="Test Form"
        data-netlify="true"
        action="/thank-you/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Test Form" type="hidden" />

        <label>
          Name
          <input name="name" type="text" />
        </label>

        <label>
          Email
          <input name="email" type="email" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactPage;
