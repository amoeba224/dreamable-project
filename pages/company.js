import Head from 'next/head'
import styled from "@emotion/styled";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/common/Navbar'
import VerticalNav from '../components/common/VerticalNav';
import MyCarousel from '../components/common/MyCarousel';
import Footer from '../components/common/Footer';
import { useState } from 'react';
import people1 from '../public/people1.jpg';
import people2 from '../public/people2.jpg';
import people3 from '../public/people3.jpg';
import CompanyCard from '../components/common/CompanyCard';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active} />
      <StyledNav>
        <VerticalNav title1="필터 1" title2="필터 2" title3="필터 3"></VerticalNav>
        <Box>
          <br></br>
          <h1>기업 목록</h1>
          <br></br>
          <MyCarousel photo1={people1} photo2={people2} photo3={people3}></MyCarousel>
          <br></br>
          <br></br>
          <CompanyCard></CompanyCard>
          <br></br>
          <CompanyCard></CompanyCard>
          <br></br>
          <CompanyCard></CompanyCard>
          <br></br>
          <CompanyCard></CompanyCard>
          <br></br>
          <CompanyCard></CompanyCard>
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

const StyledCardText = styled.div`
  display: flex;
  justify-content: space-between;
  `

const CardBox = styled.div`
  display: flex;
  `