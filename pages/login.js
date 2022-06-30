import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import styled from "@emotion/styled";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/common/Navbar'
import CardText from '../components/common/CardText';
import Footer from '../components/common/Footer'
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active} />
      <br></br>
      <br></br>
      <Box>
      <StyledCardText>
        <CardText title="인재 회원" text="구직자" link="/forpeople"></CardText>
        <CardText title="기업 회원" text="구인자" link="/forcompany"></CardText>
      </StyledCardText>
      </Box>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  )
}

const Box = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledCardText = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-around;
  `
