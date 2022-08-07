import styled from "styled-components";
import Form from "~/components/Form";

const NewsletterContainer = styled.aside`
  margin: 5rem auto 0;
  display: grid;
  justify-items: center;
`;

const NewsletterDescription = styled.p`
  max-width: 40rem;
  margin-top: 0.5rem;
  font-family: "termina", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;

  @media (min-width: 50rem) {
    font-size: 1rem;
  }
`;

const NewsletterForm = () => {
  return (
    <NewsletterContainer>
      <h2>Get new stories in your inbox</h2>
      <Form name={"Newsletter"} inline />
    </NewsletterContainer>
  );
};

export default NewsletterForm;
