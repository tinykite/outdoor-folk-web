import styled from "styled-components";
import Form from "~/components/Form";

const NewsletterContainer = styled.aside`
  margin: 3rem auto 0;
  display: grid;
  justify-items: center;

  @media (min-width: 50rem) {
    margin: 5rem auto 0;
  }
`;

const NewsletterForm = () => {
  return (
    <NewsletterContainer>
      <h2>Get new stories in your inbox</h2>
      <Form name={"Newsletter"} inline successUrl="/newsletter-confirmation/" />
    </NewsletterContainer>
  );
};

export default NewsletterForm;
