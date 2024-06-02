import {create} from 'zustand'
import { UseTodo } from './Todo'
import { Todo_Filters, type TypesFilter } from '../types/Const.ts'
import { typeData } from '../types/data'

interface TypesFilters{
    filters: TypesFilter
    filters_todo: (fil: TypesFilter) => void
    filteredTodos: typeData[]
}



export const useFilters = create<TypesFilters>((set,get) => {
    const ArrayTodo = UseTodo((state) => state.ArrayTodo)
    const AllCompleted = UseTodo((state) => state.AllCompleted)
    

return { 
    filteredTodos: [...ArrayTodo],
    filters: Todo_Filters.All,
    filters_todo(fil){

        if (fil === Todo_Filters.All) set({ filters: Todo_Filters .All})
        if (fil === Todo_Filters.AllCompleted) set({ filters: Todo_Filters.AllCompleted })
        if (fil === Todo_Filters.DeleteComleted) set({ filters: Todo_Filters.DeleteComleted })

        const { filteredTodos } = get()
        const newArrayTodo = filteredTodos.filter(e => 
            fil === Todo_Filters.All ? set({ filteredTodos }) 
            :
                fil === Todo_Filters.AllCompleted? 
                    AllCompleted()
            :
                ''
        )
        
    }



}
})