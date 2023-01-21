import React from 'react'
import styled from 'styled-components';

function ShopSection({ backgroundImg,Itemname,Benefit }) {
  console.log('bg', backgroundImg)
  return (
    <Container backgrndImg={backgroundImg}>
      <Item>
        <ItemDetail>
          <ItemName>{Itemname}</ItemName>
         {Benefit && <ItemBenefit>{Benefit}</ItemBenefit>} 
        </ItemDetail>
        <ItemButton>
          <Button>
            <a href='#'>Shop Now</a>
          </Button>
        </ItemButton>
      </Item>
    </Container>
  )
}

export default ShopSection

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
background-position:center;
background-size:cover;

background-image:${props => `url("${props.backgrndImg}")`}

`

const Item = styled.div`
display:flex;
flex-direction:column;
padding-bottom:6rem;
row-gap:1rem;
color:white
`

const ItemDetail=styled.div`
display:flex;
flex-direction:column;
row-gap:.4rem;
justify-content:center;
text-align:center;
`



const ItemName=styled.div`
font-size:3rem;
font-weight:400;
`

const ItemBenefit=styled.div`
font-size:2rem;
font-weight:400;`


const ItemButton=styled.div`
display:flex;
justify-content:center;
font-size:1rem;
color:white`
const Button=styled.div`
width:256px;
height:35px;
border-radius:.25rem;
background:white;
opacity:085;
display:flex;
justify-content:center;
align-items:center;

a {
  color:black
}`