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

const InputContainerCheckbox = styled(InputContainer)`
  flex-direction: row;
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

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label``;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
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
      <Article content={initialData[0]} />
      <Form
        method="post"
        name="Contact"
        data-netlify="true"
        action="/thank-you/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Contact" type="hidden" />
        <InputContainer>
          <Label for="name">Full Name</Label>
          <Input type="text" name="name" id="name" />
        </InputContainer>
        <InputContainer>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <Label for="message">Message</Label>
          <TextAreaInput name="message" id="message" rows={8} />
        </InputContainer>
        <InputContainerCheckbox>
          <Checkbox name="newsletter" id="newsletter" type="checkbox" />
          <Label for="newsletter">Signup for the newsletter?</Label>
        </InputContainerCheckbox>
        <InputContainer>
          <Button type="submit">Send</Button>
        </InputContainer>
      </Form>
    </>
  );
};

export default ContactPage;
