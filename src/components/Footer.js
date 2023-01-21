import React from 'react'
import styled from 'styled-components'

 const  Footer = () => {
  return (
    <Foot>
    <AllFooter>
    <EachItem>Tesla</EachItem>
    <EachItem>Privacy and Legal</EachItem>
    <EachItem>Vehicle Recalls</EachItem>
    <EachItem>Contact</EachItem>
    <EachItem>Career</EachItem>
    <EachItem>News</EachItem>
    <EachItem>Engage</EachItem>
    <EachItem>Location</EachItem>

    </AllFooter>

    </Foot>
  )
}

export default Footer


const Foot=styled.div`
width:100vw;
height:80px;
display:flex;
justify-content:center;
margin-bottom:25px;
background:black
`

const AllFooter=styled.div`
display:flex;
column-gap:1rem;
justify-content:center;
align-items:center`

const EachItem=styled.div`
font-size:1rem;
cursor:pointer;
color:black;`