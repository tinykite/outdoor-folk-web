import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin: 5rem auto;
  font-family: "courier", monospace;

  @media (min-width: 75vw) {
    max-width: 75vw;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2022 Tiny Kite</p>
      <p>Made in Minneapolis, MN</p>
    </FooterContainer>
  );
};

export default Footer;
