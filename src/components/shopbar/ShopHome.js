import React from 'react'
import styled from 'styled-components'
import ShopSection from './ShopSection'
import ShopHeader from './ShopHeader'


function ShopHome() {
  return (
    <Wrap>
    <ShopHeader />
    <ShopSection 
          Itemname="Wall Connector"
          Benefit="The most convinient way to charge at home"
         backgroundImg="images/header-1.jpg"
    />
      <ShopSection 
      Itemname="Model-S Accessories"
         backgroundImg="images/model-Sa.jpg"
    />
      <ShopSection 
       Itemname="Model-3 Accessories"
         backgroundImg="images/model-3.jpg"
    />
      <ShopSection 
       Itemname="Model-X Accessories"
         backgroundImg="images/model-x.jpg"
    />
      <ShopSection 
       Itemname="Model-Y Accessories"
         backgroundImg="/images/model-3a.jpg"
    />
       <ShopSection 
       Itemname="Charging Accessories"
         backgroundImg="/images/charging.jpg"
    />
   
    </Wrap>
  )
}

export default ShopHome

const Wrap=styled.div`
width:100vw;
height:100vh
backgound:black;

`