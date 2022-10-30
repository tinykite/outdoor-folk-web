import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  font-family: "courier", monospace;
  width: 90%;
  margin: 2.5rem auto;
  font-size: 0.875rem;

  @media (min-width: 75rem) {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 5rem auto;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2022 Tiny Kite</p>
      <p>Made on Dakota land in Minneapolis, MN.</p>
    </FooterContainer>
  );
};

export default Footer;
