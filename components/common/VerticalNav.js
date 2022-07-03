import Nav from 'react-bootstrap/Nav';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function VerticalNav(props) {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" style={{ width: '15%', padding: '1%' }}>
      <br></br>
      <Nav.Link href={props.link1}>{props.title1}</Nav.Link>
      <Nav.Link href={props.link2}>{props.title2}</Nav.Link>
      <Nav.Link href={props.link3}>{props.title3}</Nav.Link>
    </Nav>
  );
}
