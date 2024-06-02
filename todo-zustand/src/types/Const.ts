export const Todo_Filters= {
    All: 'all',
    AllCompleted: 'completed',
    DeleteComleted: 'delete'
} as const


export type TypesFilter = typeof Todo_Filters[keyof typeof Todo_Filters]

export const ButtomFilters = { // no puede ser un array no lee cuando los objetos son dinamicos
    [Todo_Filters.All]: { // Propiedad Calculada, utilizar el objeto
        name_filters: 'Todos'
    },
    [Todo_Filters.AllCompleted]: {
        name_filters: 'Completados'
    },
    [Todo_Filters.DeleteComleted]: {
        name_filters: 'Borrar Completados'
    }

}
   

