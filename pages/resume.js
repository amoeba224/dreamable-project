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
import Resume from '../components/common/Resume';
import Footer from '../components/common/Footer'
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active}/>
      <StyledNav>
        <VerticalNav></VerticalNav>
        <Box>
          <br></br>
          <SmallBox>
            <h1>이력서 1</h1>
            <div>
                <Button variant="outline-primary">수정</Button>
                <Button variant="outline-danger">삭제</Button>
            </div>
          </SmallBox>
          <Resume></Resume>
            <br></br>
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

const SmallBox = styled.div`
    display: flex;
    width: 37%;
    justify-content: space-between;
    `