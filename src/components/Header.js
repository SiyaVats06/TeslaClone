import React, { createContext, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {

  const [burger, setburger] = useState(false);



  return (


    <Container>
    
        <Icon>
          <a href='#1'><img src='images/logo.svg' alt=''></img> </a>
        </Icon>

        <Menu>
          <Each>
            <a href='#1'>Model Y </a>
          </Each>
          <Each>
            <a href='#2'>Model 3</a>
          </Each>
          <Each>
            <a href='#3'>Model S</a>
          </Each>
          <Each>
            <a href='#4'>Model X</a>
          </Each>
          <Each>
            <a href='#5'>Solar Panels</a>
          </Each>
          <Each>
            <a href='#6'>Solar Roof </a>
          </Each>






        </Menu>
        <Right>
          <Each> <Link to="/shop">Shop</Link> </Each>

          <Each><Link to="/account">Account</Link> </Each>

          <Each onClick={() => setburger(true)}>

            <a href='#'>Menu</a>

          </Each>

        </Right>
        <After  onClick={() => setburger(true)} >
          <MENU>
          <a href='#'>Menu</a>
          </MENU>
        </After>

        <Menubar className='sideMenu' show={burger}>
          <Close className='close-btn' >
            <a href='#' onClick={() => setburger(false)}><i class="uil uil-times"></i></a>
          </Close>
          <Allmenu>
            <AllItems>
            <EachItem>
                <a href='/shop'>Shop</a>
              </EachItem>
              <EachItem>
                <a href='/account'>Account</a>
              </EachItem>
              <EachItem>
                <a href=''>Existing Inventory</a>
              </EachItem>
              <EachItem>
                <a href=''>Used Inventory</a>
              </EachItem>
              <EachItem>
                <a href=''>Trade-In</a>
              </EachItem>
              <EachItem>
                <a href=''>Demo Drive</a>
              </EachItem>
              <EachItem>
                <a href=''>Insurence</a>
              </EachItem>
              <EachItem>
                <a href=''>Cybertruck</a>
              </EachItem>
              <EachItem>
                <a href=''>Roadster</a>
              </EachItem>
              <EachItem>
                <a href=''>Semi</a>
              </EachItem>
              <EachItem>
                <a href=''>Charging</a>
              </EachItem>
              <EachItem>
                <a href=''>Powerwall</a>
              </EachItem>
              <EachItem>
                <a href=''>Commercial Energy</a>
              </EachItem>
              <EachItem>
                <a href=''>Utlities</a>
              </EachItem>
              <EachItem>
                <a href=''>Find Us</a>
              </EachItem>
              <EachItem>
                <a href=''>Support</a>
              </EachItem>
              <EachItem>
                <a href=''>Investor Relations</a>
              </EachItem>
              <EachItem>
                 <Contry>
                  <WEB href='#'><i class="uil uil-globe"></i></WEB>
                 <CNMAE>
                 <a>United States</a>
                 <a>English</a>
                 </CNMAE>
                </Contry>
              </EachItem>
            </AllItems>
          </Allmenu>
        </Menubar>


      
    </Container>



  )
}

export default Header;


const Container = styled.div`
min-height:80px;
display:flex;
position:fixed;
padding:0 40px;
top:0;
left:0;
right:0;
align-items:center;
justify-content:space-between;
z-index:1;



@media screen and (width<400px){
  padding:0 20px;
}
`
const Menu = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-left:9rem;


a {
  font-weight:500;

}
@media screen and (max-width:1200px){
display:none;
}

`
const Right = styled.div`
display:flex;
column-gap:1.2rem;

a {
  font-weight:500;
  
}
Each:hover{
  background:#E6E6E3
}
@media screen and (max-width:1200px){
display:none;
}
`
const Each = styled.div`
padding:0 10px;
a:hover {
background:hsla(0,0%,0%,.05);
}
`
const Icon = styled.div`
a img{
  width:120px;
  height:20px;
  line-height:2
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
  display:flex;
justify-content:center;
align-items:center;

}

`
const MENU=styled.div``



const Menubar = styled.div`

width:250px;
height:100vh;
position:fixed;
top:0;
right:0;
border-radius:.25rem;
padding:5px;
display:flex;
flex-direction:column;
row-gap:2rem;
background:white;
transition:transform 0.5s;
transform:${props => props.show ? "translateX(0)" : "translateX(100%)"}`

const Close = styled.div`
text-align:end;
margin-top:2rem;
margin-right:2rem;
z-index:10;
font-size:2rem;
a {
  font-weight:100;
}
a:hover{
  background:hsla(0,0%,0%,.05);
}

`



const EachItem = styled.div`
a {
  font-weight:600;
}
a:hover{
  background:hsla(0,0%,0%,.05);
}
`
const Allmenu = styled.div`
display:flex;
justify-content:center;
align-items:center;`

const AllItems = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
text-align:start`


const Contry=styled.div`
display:flex;
column-gap:.4rem`
const CNMAE=styled.div`
display:flex;
flex-direction:column`

const WEB =styled.div`
margin-top:.5rem`