import React from 'react'
import Section from './Section'
import styled from "styled-components"



const Home = () => {

  return (
    <Container >
   <Section
    id="1"
    modelname="Model Y"
    detail="Schedule a Demo Drive"
    backgroundImg="/images/model-y.jpg"
    leftbtn="Custom Order"
    rightbtn="View Inventory"
   />
     <Section
      id="2"
     modelname="Model 3"
     detail="Schedule a Demo Drive"
     backgroundImg="images/model-3.jpg"
     leftbtn="Custom Order"
    rightbtn="View Inventory"
   /> 
    <Section
     id="3"
     modelname="Model S"
     detail="Schedule a Demo Drive"
     backgroundImg="images/model-s.jpg"
     leftbtn="Custom Order"
    rightbtn="View Inventory"
   /> 
   <Section
    id="4"
     modelname="Model X"
     detail="Schedule a Demo Drive"
     backgroundImg="images/model-x.jpg"
     leftbtn="Custom Order"
    rightbtn="View Inventory"

   />
     <Section
      id="5"
     modelname="Solar Panels"
     detail="Lowest Cost Solar Panels on America"
     backgroundImg="images/solar-panel.jpg"
     leftbtn="Order Now"
    rightbtn="Learn More"

   />
    <Section
     id="6"
     modelname="Solar Roof"
     detail="Produce Clean Energy From Your Roof"
     backgroundImg="images/solar-roof.jpg"
     leftbtn="Order Now"
    rightbtn="Learn More"

   />
       <Section
     modelname="Accessories"
     backgroundImg="images/accessories.jpg"
     leftbtn="Shop Now"
    

   />
   
    

    </Container>
  )
}

export default Home

const Container=styled.div`
width:100vw;
height:100vh;






`