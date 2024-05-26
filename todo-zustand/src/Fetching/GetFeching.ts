import { typeData } from '../types/data'
export async function Fetching(): Promise<typeData[]>{

    const res = await fetch('http://localhost:5173/data.json')
    const json = await res.json()
    return json

}