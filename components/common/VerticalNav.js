import Nav from 'react-bootstrap/Nav';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function VerticalNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" style={{ width: '15%', padding: '1%' }}>
      <br></br>
      <Nav.Link href="/forpeople">이력서 관리</Nav.Link>
      <Nav.Link eventKey="link-1">활동 관리</Nav.Link>
      <Nav.Link eventKey="link-2">채용 정보</Nav.Link>
    </Nav>
  );
}
