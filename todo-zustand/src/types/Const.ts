export const Todo_Filters= {
    AllCompleted: 'all completed',
    DeleteComleted: 'delete'
} as const


export const Show_Filters = {
    All: 'all',
    Completed: 'completed',
    Unfinished: 'unfinished'
} as const

export type TypesShowFilters = typeof Show_Filters[keyof typeof Show_Filters]
export type TypesFilter = typeof Todo_Filters[keyof typeof Todo_Filters]

export const ButtomFilters = { // no puede ser un array no lee cuando los objetos son dinamicos
    [Todo_Filters.AllCompleted]: {
        name_filters: 'Completar Todos'
    },
    [Todo_Filters.DeleteComleted]: {
        name_filters: 'Borrar Completados'
    }

}

export const ShowFilters = {
    [Show_Filters.All]: { name_filters: 'Mostrar Todos'},
    [Show_Filters.Completed]: { name_filters: 'Mostrar Los Completados'},
    [Show_Filters.Unfinished]: { name_filters: 'Mostrar Los no Completados'},

}
   

