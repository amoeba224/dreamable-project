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
        <SizedCarousel>
          <Carousel>
          <Carousel.Item>
            <StyledImage
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </SizedCarousel>
        <br></br>
        <br></br>
        <StyledCardText>
          <CardText title="제목 1" subtitle="부제 1" text="텍스트 1"></CardText>
          <CardText title="제목 2" subtitle="부제 2" text="텍스트 2"></CardText>
          <CardText title="제목 3" subtitle="부제 3" text="텍스트 3"></CardText>
          <CardText title="제목 4" subtitle="부제 4" text="텍스트 4"></CardText>
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

const SizedCarousel = styled.div`
  width: 1200px;
  height: 800px;
`

const StyledImage = styled(Image)`
  border-radius : 25px;
  `

const StyledCardText = styled.div`
  display: flex;
  justify-content: space-between;
  `