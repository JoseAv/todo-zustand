import { create } from 'zustand'
import { UseTodo } from './Todo'
import { Todo_Filters, type TypesFilter, type TypesShowFilters, Show_Filters } from '../types/Const.ts'
import type {  typeData } from '../types/data.d.ts'
import { useEffect } from 'react'

interface TypesFilters {
    filtersActions: TypesFilter | null
    filtersShows: TypesShowFilters | null
    actionFilters: (fil: TypesFilter | null) => void
    filteredTodos: typeData[]
    updateArrayFiltered: ()=> void
    showFilters: (fil: TypesShowFilters | null) =>  void
    modal: boolean
    updateModa: ()=> void
}



export const useFilters = create<TypesFilters>((set, get) => {
    const AllCompleted = UseTodo.getState().AllCompleted
    const DeleteCompleted = UseTodo.getState().DeleteCompleted
    
    

    return {
        filteredTodos: [],
        filtersActions: null ,
        filtersShows: Show_Filters.All,
        modal: false,

        actionFilters(fil) {
            set({ filtersActions: fil, filtersShows: null })

            if (fil === Todo_Filters.AllCompleted) {
                AllCompleted();
                set({ modal: false })
            } else if (fil === Todo_Filters.DeleteComleted) {
                DeleteCompleted();
                set({ modal: false })
            }
        },




        showFilters(fil){

            set({ filtersShows: fil, filtersActions: null })
            const { ArrayTodo } = UseTodo.getState();

            let newFilter = ArrayTodo
            if (fil === Show_Filters.Completed) {
                newFilter = ArrayTodo.filter(e => e.completed === true);
            } else if (fil === Show_Filters.Unfinished) {
                newFilter = ArrayTodo.filter(e => e.completed !== true);
            }
            set({ filteredTodos: newFilter, modal:false })
        },
        
        updateArrayFiltered(){
            const {ArrayTodo} = UseTodo.getState()
            const {filtersShows} = get()
            const { filtersActions } = get()
            if (filtersShows === Show_Filters.All || filtersActions !== null) {
                set({ filteredTodos: ArrayTodo })
            }
            
        },
        updateModa(){
            set({ modal: true })
 

        }



    }
})