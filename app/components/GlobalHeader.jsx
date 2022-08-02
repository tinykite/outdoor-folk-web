import Navigation from "~/components/Navigation";
import styled from "styled-components";
import { Link } from "@remix-run/react";
import ColorSchemeToggle from "~/components/ColorSchemeToggle";

const Header = styled.header`
  margin: 3rem auto;

  @media (min-width: 75vw) {
    max-width: 75vw;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InnerNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 1.125rem;

  @media (min-width: 50rem) {
    font-size: 1.75rem;
  }
`;

export default function GlobalHeader() {
  return (
    <Header>
      <Nav>
        <Logo>
          <Link to="/">Outdoor Folk</Link>
        </Logo>
        {/* TODO: Refactor out this unnecessary div container! */}
        <InnerNavContainer>
          <Navigation />
          {/* <ColorSchemeToggle /> */}
        </InnerNavContainer>
      </Nav>
    </Header>
  );
}
