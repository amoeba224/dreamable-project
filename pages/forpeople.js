import Head from 'next/head'
import Image from 'next/image'
import styled from "@emotion/styled";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import MyNavbar from '../components/common/Navbar'
import VerticalNav from '../components/common/VerticalNav';
import Footer from '../components/common/Footer'
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active}/>
      <h1 style={{margin: "3%"}}>내 이력서</h1>
      <StyledNav>
        <NavBox>
            <VerticalNav title1="이력서 관리" title2="활동 관리" title3="채용 정보"></VerticalNav>
        </NavBox>
        <Box>
          <Card style={{ width: '80%' }}>
              <Card.Header>이력서 목록</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><Link href="/resume">이력서 1</Link></ListGroup.Item>
                <ListGroup.Item>이력서 2</ListGroup.Item>
                <ListGroup.Item>이력서 3</ListGroup.Item>
              </ListGroup>
          </Card>
          <br></br>
          <Button variant="primary">새 이력서 작성</Button>{' '}
        </Box>
      </StyledNav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  )
}

const Box = styled.div`
  height: auto;
  width: 100%;
  min-height: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
const StyledNav = styled.div`
  display: flex;
  `

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  `