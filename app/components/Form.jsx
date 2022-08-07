import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  justify-items: center;
  width: 100%;
  margin-top: 2rem;
`;

const InputContainer = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;

  & + & {
    margin-top: 1.5rem;
  }
`;

const InputContainerCheckbox = styled(InputContainer)`
  flex-direction: row;
`;

const Input = styled.input`
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
`;

const TextAreaInput = styled.textarea`
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
`;

// TODO: Refactor this into a generic style for all inputs, to avoid repetition
const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

// TODO: Style or remove this
const Label = styled.label``;

const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-top: ${(props) => (props.inline ? "0" : "1rem")};
  border: none;
  background: #121212;
  color: #ffffff;

  :hover {
    background: #ffffff;
    color: #121212;
  }
`;

const FormFields = ({ name, inline }) => {
  switch (name) {
    case "Newsletter":
      return (
        <>
          <InputContainer>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </InputContainer>
          <InputContainer>
            <Button inline={inline} type="submit">
              Sign Up
            </Button>
          </InputContainer>
        </>
      );
    case "Contact":
    default:
      return (
        <>
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
        </>
      );
  }
};

const Form = ({ name, inline = false, successUrl }) => {
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
        window.location.href = successUrl;
      })
      .catch((error) => alert(error));
  };
  return (
    <StyledForm
      method="post"
      name={name}
      data-netlify="true"
      action="/thank-you/"
      onSubmit={handleSubmit}
    >
      <input name="form-name" value={name} type="hidden" />
      <FormFields name={name} inline={inline} />
    </StyledForm>
  );
};

export default Form;
