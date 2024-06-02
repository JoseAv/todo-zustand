import React from "react";
import { UseTodo } from "../storage/Todo"
import { Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, ListItemSecondaryAction } from "@mui/material";
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';


export function Main() {

    const ArrayTodo = UseTodo((state) => state.ArrayTodo)
    const GetAllData = UseTodo((state) => state.GetAllData)
    const SwitchCompletd = UseTodo((state) => state.SwitchCompletd)
    const DeleteTodo = UseTodo((state) => state.DeleteTodo)



    return (
        <>
            {ArrayTodo.length <= 0 ? <Button variant="contained" onClick={() => GetAllData()}>Ejemplo</Button> :
                < List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {ArrayTodo.map((value, index) => {
                        const labelId = `checkbox-list-label-${index}`;

                        return (
                            <ListItem
                                key={value.id}
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
                                    <ListItemText id={labelId} primary={value.name} />
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

        </>
    )
}




