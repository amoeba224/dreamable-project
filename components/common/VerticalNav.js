import Nav from 'react-bootstrap/Nav';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function VerticalNav(props) {
  return (
    <StyledNav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">{props.title1}</Nav.Link>
      <NavDropdown title={props.title2} id="nav-dropdown">
        <NavDropdown.Item eventKey="1">{props.title2_1}</NavDropdown.Item>
        <NavDropdown.Item eventKey="2">{props.title2_2}</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/home">{props.title3}</Nav.Link>
      <NavDropdown title={props.title4} id="nav-dropdown">
        <NavDropdown.Item eventKey="3">{props.title4_1}</NavDropdown.Item>
        <NavDropdown.Item eventKey="4">{props.title4_2}</NavDropdown.Item>
      </NavDropdown>
    </StyledNav>
  );
}

const StyledNav = styled(Nav)`
width: 120%;
margin-left: 50px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
