import React, { useEffect } from 'react'
import { ButtomFilters, TypesFilter, ShowFilters,TypesShowFilters } from '../types/Const'
import { Button, Stack } from '@mui/material'
import { useFilters } from '../storage/Filter'




export function Foter() {
    const actionFilters = useFilters((state) => state.actionFilters)
    const filtersActions = useFilters((state) => state.filtersActions)
    const filtersShows = useFilters((state) => state.filtersShows)
    const showFilters = useFilters((state)=> state.showFilters)
    const modal = useFilters((state) => state.modal)


    
    return (
        <div className={modal ? 'modal' : 'hide'}>
            <Stack spacing={2} justifyContent='center' alignItems='center' mt={2} direction='row'>
                <h2>Filtros</h2>
            </Stack>
        <Stack spacing={2} justifyContent='center' alignItems='center' mt={2} direction='row'>
            
            <Stack spacing={2} justifyContent='center' alignItems='center'>
                {
                    Object.entries(ButtomFilters).map(([key, { name_filters }]) => {
                        const isSelected = key === filtersActions
                        const className = isSelected ? 'selected' : ""
                        return (
                            <div key={key}>
                                <Button variant="text" onClick={() => actionFilters(key as TypesFilter)} className={className} >{name_filters}  </Button>
                            </div>
                        )


                    })


                }
            </Stack>

            <Stack spacing={2} justifyContent='center' alignItems='center' >
                {
                    Object.entries(ShowFilters).map(([key, { name_filters }]) => {
                        const isSelected = key === filtersShows
                        const className = isSelected ? 'selected' : ""
                        return (
                            <div key={key}>
                                <Button variant="text" onClick={() => showFilters(key as TypesShowFilters)} className={className}>{name_filters}  </Button>
                            </div>
                        )


                    })


                }
            </Stack>

        </Stack>
        
        </div>
    )




}