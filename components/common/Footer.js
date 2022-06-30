import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";

export default function Footer(){
    return(
        <StyledFooter>
            <p>&copy; Dreamable of SUNNY Scholar 2022. All Rights Reserved.</p>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    position : relative;
    transform : translateY(-100%);
    background-color: gray;
    padding: 35px;
    height: 100px;
    width: 100%;
    color: white;
    text-align: center;
    `