import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PeopleCard (props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
            <Card.Title>지원자 이름</Card.Title>
            <Card.Text>
                지원자 특징(성별, 나이, 자격증, 경력, 지역 등)
            </Card.Text>
            <Button variant="primary" href="/peopledetail">자세히 보기</Button>
            </Card.Body>
        </Card>
    )
}