import { create } from 'zustand'
import {Fetching} from   '../Fetching/GetFeching'
import {type typeData} from  '../types/data' 
interface typeTodo {
    ArrayTodo: typeData[],
    GetAllData: () => Promise<void>

}


export const UseTodo = create<typeTodo>((set) => {
    return {
        ArrayTodo: [],

       async GetAllData(){
        const response = await Fetching()
        set({ArrayTodo:response})
        }
        

        


    }
})

