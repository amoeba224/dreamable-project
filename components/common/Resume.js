import Nav from 'react-bootstrap/Nav';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Resume() {
  return (
    <Res>
        <MainBox>
            <TitleBox>
                <H1>김멋사</H1>
                <NameText>HTML/CSS 개발자</NameText>
            </TitleBox>
            <Section>
                <H2>ABOUT ME</H2>
                <AboutMeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AboutMeText>
            </Section>
            <Section>
                <H2>EXPERIENCE</H2>
                <FloatWrap>
                    <TitleText>Awesome Programming Company</TitleText>
                    <YearText>2020 - Now</YearText>
                </FloatWrap>
                <DescText>Front-End Web Developer</DescText>
                <DescSubtext>HTML/CSS, JS, React, ...</DescSubtext>
                <FloatWrap>
                    <TitleText>Ministry of Health</TitleText>
                    <YearText>2015 - 2018</YearText>
                </FloatWrap>
                <DescText>UI/UX Designer</DescText>
                <DescSubtext>Web design</DescSubtext>
                <FloatWrap>
                    <TitleText>Freelance Work</TitleText>
                    <YearText>2011 - 2015</YearText>
                </FloatWrap>
                <DescText>Graphic Designer</DescText>
                <DescSubtext>Graphic Design, Editorial Design</DescSubtext>
            </Section>

            <Section>
                <H2>ACTIVITIES</H2>
                <FloatWrap>
                    <TitleText>Front-End Web Developer Forum Volunteer</TitleText>
                    <YearText>2019 - 2020</YearText>
                </FloatWrap>
                <DescText>Application Page Development</DescText>
                <DescSubtext>Lorem ipsum dolor sit amet.</DescSubtext>
                <FloatWrap>
                    <TitleText>LIKELION SEOUL</TitleText>
                    <YearText>2017 - 2018</YearText>
                </FloatWrap>
                <DescText>Teacher in Mutsa University</DescText>
                <DescSubtext>Lorem ipsum dolor sit amet.</DescSubtext>
                <FloatWrap>
                    <TitleText>Open Source Committer</TitleText>
                    <YearText>2011 - 2013</YearText>
                </FloatWrap>
                <DescText>Angular JS</DescText>
                <DescSubtext>Lorem ipsum dolor sit amet.</DescSubtext>
            </Section>

            <Section>
                <H2>EDUCATION</H2>
                <FloatWrap>
                    <TitleText>Mutsa University</TitleText>
                    <YearText>2008 - 2012</YearText>
                </FloatWrap>
                <DescText>Computer Science and Engineering</DescText>
                <FloatWrap>
                    <TitleText>Mutsa High school</TitleText>
                    <YearText>2006 - 2008</YearText>
                </FloatWrap>
                <DescText>Visual Communication Design</DescText>
                <FloatWrap>
                    <TitleText>Online Programming Academy</TitleText>
                    <YearText>2006 - 2007</YearText>
                </FloatWrap>
                <DescText>Python Course</DescText>
            </Section>

            <Section>
                <H2>AWARDS</H2>
                <div className="floatwrap">
                    <p className="titletext">LIKELION SEOUL</p>
                    <p className="yeartext">2018</p>
                </div>
                <p className="desctext">Best Developer Award</p>
            </Section>
        </MainBox>
    </Res>
  );
}

const Res = styled.div`
    margin:0px;
    padding:0px;
    min-width: fit-content;`

const H1 = styled.h1`
    margin:0px;
    padding:0px;
    font-size:36px;
    font-weight: bold;
    font-style: italic;`

const H2 = styled.h2`
    margin:0px;
    padding:0px;
    font-size:20px;
    color:#282828;
    font-weight: lighter;
    margin-bottom: 16px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 5px;
`
const Section = styled.section`
    margin-bottom:24px;
`
const MainBox = styled.div`
    width: 610px;
    padding: 30px;
    margin: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
`

const NameText = styled.p`
    font-size:16px;
    color:#7c7c7c;
    font-weight: bold;
`
const AboutMeText = styled.p`
    font-size:10px;
    line-height: 16px;
`

const TitleBox = styled.div`
    text-align: right;
`

const FloatWrap = styled.div`
    overflow: hidden;
`

const TitleText = styled.p`
    font-size:11px;
    font-weight: bold;
    color: #282828;
    float: left;
`

const YearText = styled.p`
    font-size:11px;
    font-weight: bold;
    color: #282828;
    float: right;
`

const DescText = styled.p`
    font-size: 9px;
`

const DescSubtext = styled.p`
    font-size: 9px;
    color:#282828;
    padding-left:16px;
`

