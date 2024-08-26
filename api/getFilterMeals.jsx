import axios from "axios"

const url = import.meta.env.VITE_API_URL


export const getFilterMeals = async (meal) => {

    const res = await axios.get(`${url}type/${meal}`)
    return res.data
    
    

}