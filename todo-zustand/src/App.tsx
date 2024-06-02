import React from 'react'
import './App.css'
import {Header} from './Components/Header'
import { Container } from "@mui/material"
import { Main } from './Components/Main'
function App() {
  

  return (
    <>
    <Container maxWidth={'sm'}>
    <Header/>
      <Main/>
    </Container>
    </>
  )
}

export default App



