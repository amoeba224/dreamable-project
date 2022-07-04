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
import bakery from '../public/bakery.jpg';
import PeopleCard from '../components/common/PeopleCard';



export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active}/>
      <StyledImage>
        <Image src={bakery} alt="bakery" style={{ opacity: "0.5"}} />
        <StyledDiv>드리머블</StyledDiv>
        <StyledButton href="/resumeform">지원하기</StyledButton>
      </StyledImage>
      <br></br>
      <Intro>
        <h1>지원분야</h1>
        <br></br>
        <h2>모집부문</h2>
        <br></br>
        <h2>업무내용</h2>
      </Intro>
      <br></br>
      <Intro>
        <h1>지원자격</h1>
      </Intro>
      <br></br>
      <Intro>
        <h1>지원서 접수</h1>
        <p>날짜</p>
        <p>문의처</p>
      </Intro>
        <Box>
        </Box>
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
const StyledImage = styled.div`
  position: relative;
  text-align: center;
  `
const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 300%;
  font-weight: bold;
`
const Intro = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  `

const CardBox = styled.div`
  display: flex;
  `

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 12px;

`