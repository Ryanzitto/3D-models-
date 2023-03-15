import React from "react";
import styled from 'styled-components'
import Map from './Map'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap:50px;

@media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 600px) {
      margin-left: 100px;
    }
`
const Title = styled.h1`
font-weight: 200;
`
const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;
`
const Input = styled.input`
padding: 20px;
background-color: #e8e6e6;
border: none;
border-radius: 5px;
font-size: 16px;

@media only screen and (max-width: 600px) {
      width: 80%;
    }
` 
const TextArea = styled.textarea`
min-height: 75px;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
max-width: 500px;
max-height: 200px;
font-size: 16px;
padding: 20px;

@media only screen and (max-width: 600px) {
      width: 80%;
    }
`
const Button = styled.button`
background-color: #da4ea2;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;

@media only screen and (max-width: 600px) {
      width: 80%;
    }
`
const Right = styled.div`
flex: 1;
@media only screen and (max-width: 900px) {
      display: none;
  }
`
const handleSubmit = (e)=>{
  e.preventDefault()
}

const Contact = () => {
    return ( 
        <Section>
          <Container>
            <Left>
              <Form onSubmit={handleSubmit}>
                <Title>Contact Us</Title>
                <Input placeholder="Name"/>
                <Input placeholder="Email"/>
                <TextArea placeholder="Write your message"/>
                <Button type="submit">Send</Button>
              </Form>
            </Left>
            <Right>
              <Map/>
            </Right>
          </Container>
        </Section>
     );
}
 
export default Contact;