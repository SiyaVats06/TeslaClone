import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function AccountHeader() {
  return (
    <Header>
    <Left>
        <Logo>
        <Link to="/"><img src='images/logo.svg' alt=''></img></Link>
        </Logo>
     
    </Left>




    <Right>
        <Each><WEB ><i class="uil uil-globe"></i></WEB></Each>
        <Each><Name><a>en-US</a></Name></Each>
       

    </Right>


   
</Header>
  )
}

export default AccountHeader

const Header = styled.div`
min-height:60px;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
left:0;
right:0;
padding:0 40px;
background:white;
color:black;
font-weight:500;
@media screen and (width<520px){
    padding:0 20px;
}`

const Left = styled.div`
display:flex;
column-gap:1.5rem;


`

const Logo = styled.div`

a img{
   
    width:120px;
    height:20px;
}
@media screen and (width<520px){
    a img{
   
   width:80px;
   height:16px;
}

`


const Each = styled.div`
cursor:pointer`

const Right = styled.div`
display:flex;
column-gap:.8rem;
justify-content:center;
align-items:center;
@media screen and (width<520px){
    column-gap:.4rem;
}
`



const WEB =styled.div`

font-size:1.7rem;
@media screen and (width<520px){
    font-size:1rem;
}
`

const Name=styled.div`
display:flex;
justify-content:center;
align-items:center`
