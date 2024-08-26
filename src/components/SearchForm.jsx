import { useNavigate } from "@tanstack/react-router";
import { CiSearch } from "react-icons/ci";
import { useData } from "../provider/GlobalProvider";

const SearchForm = () => {

    const navigate = useNavigate()

    const {searchVal, handleSearch} = useData()

    
    const onSubmit = (e) => {
         e.preventDefault();

             navigate({
                to: '/',
                search: {search: searchVal},
             })

        handleSearch('')

    }



  return (
    <form onSubmit={onSubmit}
    
    className="w-[250px] relative group cursor-pointer transition-all  p-2  flex justify-between items-center bg-transparent  border-[1px] rounded-md border-darkBrown">
        <input type="text"
         id="search-meal"
         name="search-meal"
         value={searchVal}
         placeholder=""
         className="flex-grow peer text-darkBrown text-sm outline-0 h-full"
         onChange={(e) => handleSearch(e.target.value)}
        />
        <label htmlFor="search-meal"
          className="text-[12px] z-10 bg-white left-0 top-0 translate-x-[8px] -translate-y-[9px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-[13px] text-darkBrown absolute   transition-all"
         >Search for any meal</label>

        <button type="submit" className="h-full w-8 flex items-center justify-center bg-transparent cursor-pointer">
           <CiSearch className="text-md size-full text-darkBrown hover:text-darkGold" />
        </button>
    </form>
  )
}

export default SearchForm