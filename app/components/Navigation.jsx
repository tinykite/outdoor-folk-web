import styled from "styled-components";
import { navLinks } from "../lib/config/navLinks";
import { NavLink } from "@remix-run/react";

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-family: courier, monospace;
  font-style: normal;
  font-size: 1.125rem;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

export default function Navigation() {
  return (
    <List>
      {navLinks.map((link) => {
        return (
          <ListItem key={link.label}>
            <NavLink to={link.url}>{link.label}</NavLink>
          </ListItem>
        );
      })}
    </List>
  );
}
