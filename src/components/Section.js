
import React from 'react'
import styled from "styled-components"
import Header from './Header'

const Section = ({modelname,backgroundImg,leftbtn,rightbtn,detail}) => {
  return (
    <Wrap style={{backgroundImage:`url(${backgroundImg})`}}>
   

      <Buttons>
        <Itemname>
          <Itemmodel>{modelname}</Itemmodel>
          <Itemdrive >{detail}</Itemdrive>
        </Itemname>
        <Itembuttons>
          <Leftbtn>
            <div>{leftbtn}</div>
          </Leftbtn>
        { rightbtn &&  <Rightbtn><div>{rightbtn}</div></Rightbtn>}
        </Itembuttons>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background:lightpink;
background-size:cover;
background-position:center;

`
const Buttons = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between
`
const Itemname = styled.div`
display:flex;
flex-direction:column;
margin-top:5rem
`
const Itemmodel=styled.div`
color:black;
font-size:2.5rem;
font-weight:600
`



const Itemdrive=styled.div`
color:black;
font-size:1rem;
text-decoration:underline;
cursor:pointer`





const Itembuttons = styled.div`
display:flex;
justify-content:center;
column-gap:1rem;
margin-bottom:6rem;

@media screen and (max-width:767px){
  flex-direction:column;
  row-gap:1rem;
  align-items:center;
}

`
const Leftbtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:.25rem;
background:black;
width:256px;
height:2rem;
opacity:0.65;
font-weight:500;
cursor:pointer;
color:white`


const Rightbtn = styled(Leftbtn)`
background:white;
color:black;
opacity:0.85
`
