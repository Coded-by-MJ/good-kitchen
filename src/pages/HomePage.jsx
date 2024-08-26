
import { useSearch } from "@tanstack/react-router"
import AllMealsPage from "./AllMealsPage"
import RandomMealPage from "./RandomMealPage"
import FilterMealsPage from "./FilterMealsPage"
import SearchPage from "./SearchMealPage"


const HomePage = () => {

    const searchQueries = useSearch({strict: false})


    if(searchQueries?.random) {
       return  <RandomMealPage />
    }
     if(searchQueries?.type) {
       return  <FilterMealsPage queryParams={searchQueries.type} />
    }
    if(searchQueries?.search) {
       return  <SearchPage queryParams={searchQueries.search} />
    }



  return (
       <AllMealsPage /> 
  )
}

export default HomePage