import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledNavbar = styled(Navbar)`
  padding: 15px 0;
  width: 100%;
  background-color: #7952B3;
`;

export default function MyNavbar(props) {
  const router = useRouter();
  let { introActive, peopleActive, companyActive, qnaActive } = false;

  switch(router.pathname) {
    case "/intro":
      introActive = true;
      break;
    case "/people":
      peopleActive = true;
      break;
    case "/company":
      companyActive = true;
      break;
    case "/qna":
      qnaActive = true;
      break;
    default:
      break;
  };

  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">DREAMABLE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/intro" active={introActive}>소개</Nav.Link>
            <Nav.Link href="/people" active={peopleActive}>인재 찾기</Nav.Link>
            <Nav.Link href="/company" active={companyActive}>일자리 찾기</Nav.Link>
            <Nav.Link href="/qna" active={qnaActive}>QnA</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}