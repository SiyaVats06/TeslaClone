import React, { useState } from 'react'
import styled from 'styled-components'

function AccountHome() {
  const [ketStatus,setkeyStatus]=useState(false);
  return (
    <Container>
      <Formbox>
        <Box>
          <Name>Sign In</Name>
          <Email>Email</Email>
          <Input ><input onKeyDown={()=>{setkeyStatus(true)}}  type="text" /></Input>
          <Button status={ketStatus}><a>Next</a></Button>
          <Trouble><a>Trouble Sign In?</a></Trouble>
          <LineBreak>
            <Line><hr /></Line>
            <Or>or</Or>
            <Line><hr /></Line>
          </LineBreak>
          <Create><a >Create Account</a></Create>

        </Box>

      </Formbox>


    </Container>
  )
}

export default AccountHome
const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
margin-top:5rem;
`
const Formbox = styled.div`
display:flex;
justify-content:center`

const Box = styled.div`
width:300px;
display:flex;
height:500px;
flex-direction:column;
row-gap:1.5rem;
@media screen and (width<520px){
   width:250px;
}
@media screen and (width<520px){
   width:200px;
}`

const Name = styled.div`
font-size:2rem;
font-weight:600`

const Email = styled.div`
font-weight:600`

const Input = styled.div`
width:100%;
height:35px;
border-radius:.24rem;
background:hsla(0,0%,0%,.05);
display:flex;
justify-content:center;

input {
  width:100%;
  height:30px;
  background:transparent;
  border-color:hsla(0,0%,0%,.10);
  color:black;
}
`

const Button = styled.div`
width:100%;
height:35px;
background:blue;
opacity:${props=>props.status ? '1' : '.45'};
text-align:center;
cursor:pointer;
border-radius:.24rem;
display:flex;
justify-content:center;
align-items:center;
a {
  color:white;
}
`

const Trouble = styled.div`
display:flex;
justify-content:center;

cursor:pointer;
a {
  text-decoration:underline;
}
`

const LineBreak = styled.div`
display:flex;
column-gap:.4rem`

const Line = styled.div`
width:50%;
`

const Or = styled.div`
`

const Create = styled.div`
background:hsla(0,0%,0%,.05);
height:35px;
border-radius:.24rem;
text-align:center;
color:black;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;`