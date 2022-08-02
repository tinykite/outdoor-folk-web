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

const Label = styled.label``;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export async function loader({ request, params }: any) {
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
      <Form name="contact" method="POST" data-netlify="true">
        <InputContainer>
          <Label>Full Name</Label>
          <Input type="text" name="name" />
        </InputContainer>
        <InputContainer>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <Label>Message</Label>
          <TextAreaInput name="message" rows={8} />
        </InputContainer>
        <InputContainer>
          <Button type="submit">Send</Button>
        </InputContainer>
      </Form>
    </>
  );
};

export default ContactPage;
