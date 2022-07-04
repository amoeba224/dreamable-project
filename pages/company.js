import Head from 'next/head'
import styled from "@emotion/styled";
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/common/Navbar'
import VerticalNav from '../components/common/VerticalNav';
import MyCarousel from '../components/common/MyCarousel';
import Footer from '../components/common/Footer';
import { useState } from 'react';
import barista from '../public/barista.jpg';
import CompanyCard from '../components/common/CompanyCard';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active} />
      <Div>
      <StyledImage src={barista} alt="barista"></StyledImage>
      </Div>
      <br></br>
      <Search className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </Search>
      <br></br>
      <StyledNav>
      <NavBox>
          <VerticalNav title1="전체" title2="외식음료" title2_1="바리스타" title2_2="제과제빵" title3="사무보조" title4="예술" title4_1="미술" title4_2="음악"></VerticalNav>
          <VerticalNav title2="지역" title2_1="서울" title2_2="경기" title4="근로조건" title4_1="시간" title4_2="급여"></VerticalNav>
      </NavBox>
        <Box>
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

const StyledImage = styled(Image)`
  max-width: 100%;
  `
const Div = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin: auto;`

  const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  `

  const Search = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: auto;
`