import Head from 'next/head'
import Image from 'next/image'
import styled from "@emotion/styled";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/common/Navbar'
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
        <h1>Something about employers</h1>
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
