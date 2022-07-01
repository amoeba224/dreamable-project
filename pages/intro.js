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
import img1 from '../public/img1.jpg';
import img2 from '../public/img2.jpg';
import img3 from '../public/img3.jpg';

export default function Home() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <MyNavbar name="Likelion SKKU Notice" active={active} />
      <br></br>
      <br></br>
      <Box>
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

const SizedCarousel = styled.div`
  width: 63%;
  height: 800px;
`

const StyledImage = styled(Image)`
  border-radius : 25px;
  `

const StyledCardText = styled.div`
  display: flex;
  justify-content: space-between;
  `