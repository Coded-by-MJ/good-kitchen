import axios from "axios"

const url = import.meta.env.VITE_API_URL


export const getSearchMeal = async (meal) => {

    const res = await axios.get(`${url}search/${meal}`)
    console.log(res.data)
    return res.data
    
    

}