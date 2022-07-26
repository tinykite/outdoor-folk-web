import styled from "styled-components";
import { navLinks } from "../lib/config/navLinks";
import { Link } from "@remix-run/react";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-family: courier, monospace;
  font-style: normal;
  font-size: 1rem;
  margin-right: 1rem;

  & a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:focus,
  a:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <List>
      {navLinks.map((link) => {
        return (
          <ListItem key={link.label}>
            <Link to={link.url}>{link.label}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}
