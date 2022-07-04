import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PeopleCard (props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.content}
            </Card.Text>
            <Button variant="primary" href={props.href}>자세히 보기</Button>
            </Card.Body>
        </Card>
    )
}