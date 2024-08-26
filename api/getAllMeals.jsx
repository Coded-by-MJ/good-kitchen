import axios from "axios"

const url = import.meta.env.VITE_API_URL


export const getAllMeals = async () => {

    const res = await axios.get(url)
    return res.data
    
    

}

