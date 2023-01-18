import React from 'react'
import styled from 'styled-components';

const Header = ({ name }) => {
  console.log(name);
  return (
    <Container>
    <Icon>
    <a>
        <img src='images/logo.svg' alt=''></img>
      </a>
    </Icon>
     
      <Menu>
        <Each>
          <a href='#'>Model S </a>
        </Each>
        <Each>
          <a href='#'>Model 3</a>
        </Each>
        <Each>
          <a href='#'>Model X</a>
        </Each>
        <Each>
          <a href='#'>Model Y</a>
        </Each>
        <Each>
          <a href='#'>Solar Roof</a>
        </Each>
        <Each>
          <a href='#'>Solar Panels</a>
        </Each>






      </Menu>
      <Right>
        <Each>
          <a href=''>Shop</a>
        </Each>

        <Each>

          <a href=''>Account</a>
        </Each>
        <Each>
          <a href='#'>Menu</a>
        </Each>

      </Right>
      <After className='menu__small'>
      <a href='#'>Menu</a>
      </After>

      <Menubar className='sideMenu'>
        <Close className='close-btn'>
           <button>X</button>
        </Close>
        <Allmenu>
        <AllItems>
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
            <a href=''>United States</a>
            </EachItem>
        </AllItems>
        </Allmenu>
      </Menubar>


    </Container>
  )
}

export default Header

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
Each.hover{
  background:blue
}
`
const Icon=styled.div`
a img{
  width:120px;
  height:20px;
  line-height:2
}
`
const After=styled.div`
width:80px;
height:30px;
background:hsla(0,0%,0%,.05);
color:black;
display:none;
text-align:center;

align-item:center;
font-weight:500;
a {
  margin-top:auto;
}
@media screen and (width<=1200px){
  display:inline-block;
}

`
const Menubar=styled.div`

width:15%;
height:100vh;
position:fixed;
top:0;
right:0;
border-radius:.25rem;
padding:5px;
display:flex;
flex-direction:column;
row-gap:2.5rem;
background:white`
const Close=styled.div`
text-align:end;
margin-top:2rem;
margin-right:2rem
`



const EachItem=styled.div`
a {
  font-weight:600px;
}

`
const Allmenu=styled.div`
display:flex;
justify-content:center;
align-items:center;`

const AllItems=styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
text-align:start`


