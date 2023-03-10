
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = ({modelname,backgroundImg,leftbtn,rightbtn,detail,id}) => {
 
  return (
    <Wrap backgrnd={backgroundImg} id={id} >
     <Buttons>
    
        <Itemname>
          <Itemmodel>{modelname}</Itemmodel>
          <Itemdrive >{detail}</Itemdrive>
        </Itemname>
    
        <Itembuttons>
       <Link to="/shop">
       <Leftbtn>
            <div>{leftbtn}</div>
          </Leftbtn>
       </Link>
       
   
         
        { rightbtn && <Link to="/account"><Rightbtn><div>{rightbtn}</div></Rightbtn></Link> }
        </Itembuttons>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;

background-size:cover;
background-position:center;
background-image:${props=>`url("${props.backgrnd}")`};

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
margin-top:5rem;

`
const Itemmodel=styled.div`
color:black;
font-size:2.5rem;
font-weight:600;

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
