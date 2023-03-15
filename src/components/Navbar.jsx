import React from "react";
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    padding-top: 10px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
`
const Logo = styled.h1`
    width: 218px;
    padding: 5px;
    font-size: 25px;
    border-radius: 10px;
    margin-left: 135px;
    opacity: 0.7;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0px;
        justify-content: center;
    }

&:hover{
    opacity: 1;
    animation: animateLogo 2s both;

    @keyframes animateLogo {
        to {
            background-color: white;
            color: #6b1ba8;
        }
    }
}
`
const Navbar = () => {
    return ( 
        <Section>
            <Container>
                    <Logo>Web Development</Logo>
            </Container>
        </Section>
     );
}
 
export default Navbar;