import axios from "axios"

const url = import.meta.env.VITE_API_URL


export const getRandomMeal = async () => {

    const res = await axios.get(`${url}random`)
 
    return res.data
    
    

}