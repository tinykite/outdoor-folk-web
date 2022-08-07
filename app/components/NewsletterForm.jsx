import styled from "styled-components";
import Form from "~/components/Form";

const NewsletterContainer = styled.aside`
  margin: 5rem auto 0;
  display: grid;
  justify-items: center;
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
