import React, { useState } from 'react'
import './App.css'
import {Header} from './Components/Header'
import { Button, Container } from "@mui/material"
import { Main } from './Components/Main'
import { Foter } from "../src/Components/Foter"
import { useFilters } from './storage/Filter'
function App() {
  const modal = useFilters((state)=> state.modal)
  return (
    <>
    <Container maxWidth={'sm'}>

        {modal ? <>
          
          <Foter/>
          
        </> : <>
        
            <Header />
            <Main />
        </>}
 
    </Container>
    </>
  )
}

export default App



