import { Stack,TextField,Fab,Button } from "@mui/material"
import {AddTask} from '@mui/icons-material'
import {UseTodo} from '../storage/Todo'

export function Header(){

const ArrayTodo = UseTodo((state)=> state.ArrayTodo)
const GetAllData = UseTodo((state)=> state.GetAllData)

return (
    <>
    
    <Stack direction='row' gap={2} justifyContent={'center'} alignItems={'center'}>
     <h1>Hola Mundo</h1>
     <svg  xmlns="http://www.w3.org/2000/svg"  width="74"  height="74"  viewBox="0 0 24 24"  fill="none"  stroke="#2465ff"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>
    </Stack>

    <Stack direction={'row'} gap={2} justifyContent={'center'} alignItems={'center'} margin={2}>
    <TextField fullWidth label="NewTask" id="NewTask" onChange={()=> {}}/>
    
    <Fab color="primary" aria-label="add" onClick={()=> {}}>
      <AddTask />
    </Fab>
        
    </Stack>

    {ArrayTodo.length <= 0 ? <Button variant="outlined" onClick={GetAllData}>Ejemplo</Button>: '' }

    </>

)

}