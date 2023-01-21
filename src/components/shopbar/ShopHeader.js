import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ShopHeader() {
    const [burger, setburger] = useState(false)

    return (
        <Header>
            <Left>
                <Logo>
                    <Link to="/"><img src='images/logo.svg' alt=''></img></Link>
                </Logo>
                <Line>|</Line>
                <Kind>
                    <a>Shop</a>
                </Kind>
            </Left>

            <Mid>
                <Each>Charging</Each>
                <Each>Vehicle Accessories</Each>
                <Each>Apparal</Each>
                <Each>Lifestyle</Each>

            </Mid>


            <Right>
                <Each><i class="uil uil-search"></i></Each>
                <Each><i class="uil uil-shopping-cart"></i></Each>
                <Each onClick={() => { setburger(true) }}>Menu</Each>

            </Right>
            <After onClick={() => setburger(true)} >
                <MENU>
                    <a href='#'>Menu</a>
                </MENU>
            </After>


            <Sidebar burgerStatus={burger}>
                <Allmenu>
                    <Close onClick={() => { setburger(false) }}><a><i class="uil uil-times"></i></a></Close>
                    <Menu>
                        <Each>Shop FAQ</Each>
                        <Each>Sign In</Each>
                        <Each>
                            <Contry>
                                <WEB ><i class="uil uil-globe"></i></WEB>
                                <CNMAE>
                                    <a>United States</a>
                                    <a>English</a>
                                </CNMAE>
                            </Contry>
                        </Each>
                    </Menu>
                </Allmenu>
            </Sidebar>
        </Header>
    )
}

export default ShopHeader

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
}

`

const Line = styled.div`
@media screen and (width<520px){
  display:none;
}
`
const Kind = styled.div`
a {
    color:black;
}
@media screen and (width<520px){
  display:none;
}

`

const Mid = styled.div`
display:flex;
column-gap:1.2rem;
@media screen and (width<1000px){
    display:none;
}`

const Each = styled.div`
cursor:pointer`

const Right = styled.div`
display:flex;
column-gap:1.2rem;
@media screen and (width<=1200px){
  display:none;
}
`

const After = styled.div`
width:80px;
height:30px;
background:hsla(0,0%,0%,.05);
color:black;
display:none;

font-weight:500;

@media screen and (width<=1200px){
  display:block;
}
`

const MENU=styled.div`
display:flex;
justify-content:center;
align-items:center`
const Sidebar = styled.div`
width:250px;
height:100vh;
display:flex;

justify-content:center;

position:fixed;
top:0;
right:0;
background:white;
transform:${props => props.burgerStatus ? 'translateX(0)' : 'translateX(100%)'};
transition:transform .4s;

`

const Allmenu = styled.div`
display:flex;
flex-direction:column;
margin-top:3rem;
row-gap:2rem;


`

const Close = styled.div`
display:flex;
cursor:pointer;
font-size:2rem;
justify-content:flex-end;`

const Menu = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem`

const Contry = styled.div`
display:flex;
column-gap:.5rem`

const WEB = styled.div`

font-size:1.5rem`

const CNMAE = styled.div`
display:flex;
flex-direction:column;`