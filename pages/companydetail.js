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
      </StyledImage>
      <br></br>
      <Intro>
        <h1>기업 소개</h1>
        <p>솔직히 말할게 많이 기다려 왔어 너도 그랬을 거라 믿어 오늘이 오길 매일같이 달력을 보면서 솔직히 나에게도 지금 이 순간은 꿈만 같아 너와 함께라 오늘을 위해 꽤 많은 걸 준비해 봤어 All about you and I 다른 건 다 제쳐 두고 Now come with me Take my hand 아름다운 청춘의 한 장 함께 써내려 가자 너와의 추억들로 가득 채울래 아무 걱정도 하지는 마 나에게 다 맡겨 봐 지금 이 순간이 다시 넘겨볼 수 있는 한 페이지가 될 수 있게 This is our page Our page 솔직히 말할게 지금이 오기까지 마냥 순탄하진 않았지 오늘이 오길 나도 목 빠져라 기다렸어 솔직히 나보다도 네가 몇 배는 더 힘들었을 거라고 믿어 오늘을 위해 그저 견뎌줘서 고마워 All about you and I 다른 건 다 제쳐 두고 Now come with me Take my hand 아름다운 청춘의 한 장 함께 써내려 가자 너와의 추억들로 가득 채울래 아무 걱정도 하지는 마 나에게 다 맡겨 봐 지금 이 순간이 다시 넘겨볼 수 있는 한 페이지가 될 수 있게 Want you to Come on out and have fun Want us to Have the time of our life Oh 너와의 추억들로 가득 채울래 아무 걱정도 하지는 마 나에게 다 맡겨 봐 지금 이 순간이 다시 넘겨볼 수 있는 한 페이지가 될 수 있게 This is our page Our page</p>
        <br></br>
        <h2>위치 및 연락처</h2>
        <p>주소 및 지도, 교통편 첨부</p>
        <p>연락처</p>
      </Intro>
      <br></br>
      <Intro>
        <h1>채용 공고</h1>
        <CardBox>
          <PeopleCard name="직무" content="근로조건 및 내용" href="/companycontent"></PeopleCard>
          <PeopleCard name="직무" content="근로조건 및 내용" href="/companycontent"></PeopleCard>
          <PeopleCard name="직무" content="근로조건 및 내용" href="/companycontent"></PeopleCard>
          <PeopleCard name="직무" content="근로조건 및 내용" href="/companycontent"></PeopleCard>
          <PeopleCard name="직무" content="근로조건 및 내용" href="/companycontent"></PeopleCard>
        </CardBox>
      </Intro>
      <br></br>
      <Intro>
        <h1>근무환경</h1>
        <p>설명 사진 첨부</p>
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