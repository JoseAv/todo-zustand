import { create } from 'zustand'
import { Fetching } from '../Fetching/GetFeching'
import { type typeData } from '../types/data'
interface typeTodo {
    ArrayTodo: typeData[],
    GetAllData: () => Promise<void>
    SwitchCompletd: (id: number) => void
    DeleteTodo: (id: number) => void
    AddTodo: (name: string) => void
    AllCompleted: ()=> void
    DeleteCompleted: ()=> void
}


export const UseTodo = create<typeTodo>((set, get) => {
    return {
        ArrayTodo: [],

        async GetAllData() {
            const response = await Fetching()
            set({ ArrayTodo: response })
        },

        SwitchCompletd(id) {
            if (Array.length <= 0) return
            const { ArrayTodo } = get()
            const newArrayTodo = ArrayTodo.map(ele => {
                if (ele.id === id) {
                    return { ...ele, completed: !ele.completed }
                }
                return ele
            })

            set({ ArrayTodo: newArrayTodo })
        },


        DeleteTodo(id) {
            if (Array.length <= 0) return
            const { ArrayTodo } = get()
            const newArrayTodo = ArrayTodo.filter(ele => ele.id !== id)

            set({ ArrayTodo: newArrayTodo })
        },

        AddTodo(name) {
            const { ArrayTodo } = get()
            const maxId = ArrayTodo.length ? Math.max(...ArrayTodo.map(todo => todo.id)) : 0;
            const newTodo = { id: maxId + 1, name, completed: false };
            const newArray = [...ArrayTodo, newTodo];
            set({ ArrayTodo: newArray });
        },

        AllCompleted(){
            const { ArrayTodo } = get()
            const newArrayTodo = ArrayTodo.map(todo=> {
                return(
                    { ...todo, completed: true}
                )

            })

            set({ ArrayTodo: newArrayTodo });
        },
        DeleteCompleted(){
            const {ArrayTodo} = get()
            const newArrayTodo = ArrayTodo.filter(todo => todo.completed !== true)
            set({ ArrayTodo: newArrayTodo })
        }

        


    }
})

