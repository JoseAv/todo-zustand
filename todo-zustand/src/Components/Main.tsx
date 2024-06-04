import React, { useEffect } from "react";
import { UseTodo } from "../storage/Todo"
import { useFilters } from '../storage/Filter'
import { Todo_Filters, Show_Filters } from '../types/Const'
import { Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, ListItemSecondaryAction, Stack } from "@mui/material";
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';


export function Main() {

    const filteredTodos = useFilters((state) => state.filteredTodos)
    const updateArrayFiltered = useFilters((state) => state.updateArrayFiltered)
    const filtersActions = useFilters((state) => state.filtersActions)
    const filtersShows = useFilters((state) => state.filtersShows)
    const ArrayTodo = UseTodo((state) => state.ArrayTodo)
    const GetAllData = UseTodo((state) => state.GetAllData)
    const SwitchCompletd = UseTodo((state) => state.SwitchCompletd)
    const DeleteTodo = UseTodo((state) => state.DeleteTodo)
    console.log(filteredTodos)
    useEffect(() => {
        updateArrayFiltered()

    }, [ArrayTodo])

    
    return (
        <Stack justifyContent='center' alignItems='center'>
            
            {filteredTodos.length <= 0 ? <Button variant="contained" onClick={() => GetAllData()}>Ejemplo</Button> :
                < List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {filteredTodos.map((value, index) => {
                        const labelId = `checkbox-list-label-${index}`;

                        return (
                            <ListItem
                                key={index}
                                disablePadding


                            >
                                <ListItemButton role={undefined} onClick={() => SwitchCompletd(value.id)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            checked={value.completed}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId}  primary={value.name}  />
                                </ListItemButton>

                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => DeleteTodo(value.id)}>
                                        <BackspaceRoundedIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List >



            }

        </Stack>
    )
}




