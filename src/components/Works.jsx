import React, { useState } from "react";
import styled from 'styled-components'
import Development from "./Development";
import GameDev from "./GameDev";
import ProductDesign from "./ProductDesign";
import Social from "./SocialMedia";


const data = [
  "Game Dev.",
  "Development",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }

`

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;

    @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
  }
`

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`
const ListItem = styled.li`
font-size: 70px;
font-Weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;


@media only screen and (max-width: 768px) {
    font-size: 60px;
    -webkit-text-stroke: 1px solid;
  }

::after{
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: #481470;
  width: 0;
  overflow: hidden;
  white-space: nowrap;

}

&:hover{
  -webkit-text-stroke: 1px #481470;
  ::after{
    animation: moveText 1s linear both;

    @keyframes moveText{
      to{
        width: 100%;
        
      }
    }
  }
}

`

const Right = styled.div`
flex:1;
`
const Works = () => {
    const [work, setWork] = useState("Game Dev.")
    return ( 
        <Section>
          <Container>
            <Left>
              <List>
                {data.map((item) => (
                  <ListItem text={item} key={item} onClick={() =>setWork(item)} >{item}</ListItem>
                ))}
              </List>
            </Left>
            <Right>
              {work === "Game Dev." ? (<GameDev/>) : work === "Development" ? (<Development/>) : work === "Product Design" ? (<ProductDesign/>) : <Social/>}
            </Right>
          </Container>
        </Section>
     );
}
 
export default Works;