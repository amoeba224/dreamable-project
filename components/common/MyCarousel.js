import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import styled from "@emotion/styled";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export default function MyCarousel(props) {
  return (
    <>
        <SizedCarousel>
          <Carousel>
          <Carousel.Item>
            <StyledImage
              className="d-block w-100"
              src={props.photo1}
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
              src={props.photo2}
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
              src={props.photo3}
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
    </>
  )
}

const SizedCarousel = styled.div`
  width: 63%;
  height: auto;
`

const StyledImage = styled(Image)`
  border-radius : 25px;
  `