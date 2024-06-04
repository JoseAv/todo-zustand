import { Stack, TextField, Fab, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import React, { useState, ChangeEvent } from "react";
import { UseTodo } from "../storage/Todo";
import { useFilters } from "../storage/Filter";




export function Header() {
  const [text,setText] = useState('')
  
  const AddTodo = UseTodo((state)=> state.AddTodo)
  const updateModa = useFilters((state) => state.updateModa)

  function handelValue(eve: ChangeEvent<HTMLInputElement>){
    const target = eve.target.value
    setText(target)

  }




  return (
    <>

      <Stack direction='row' gap={2} justifyContent={'center'} alignItems={'center'}>
        <h1>Todo TypeScript</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="#2465ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>
      
      </Stack>
      
      <Stack direction={'row'} gap={2} justifyContent={'center'} alignItems={'center'} margin={2}>
        <Button onClick={() => updateModa()}>    < svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal" >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 6l8 0" />
          <path d="M16 6l4 0" />
          <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 12l2 0" />
          <path d="M10 12l10 0" />
          <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 18l11 0" />
          <path d="M19 18l1 0" />
        </svg ></Button>
        <TextField fullWidth label="NewTask" id="NewTask" onChange={handelValue} value={text} />

        
        <Button variant="outlined" onClick={() => {
          AddTodo(text);
          setText('')
        }}>
          <AddIcon />
        </Button>

      </Stack>



    </>

  )

}