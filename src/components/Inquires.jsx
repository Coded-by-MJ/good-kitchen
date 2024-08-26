import { useNavigate } from "@tanstack/react-router";
import FilterDropDown from "./FilterDropDown";
import SearchForm from "./SearchForm";
import { useData } from "../provider/GlobalProvider";
import { useQueryClient } from "@tanstack/react-query";



const Inquires = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {handleActive, hideDropDown} = useData()



    const onRandom = () => {

        handleActive('');
        hideDropDown()
   
        navigate({
            to: '/',
            search: { random: true},
        })

        queryClient.invalidateQueries(
          {
            queryKey: ['random'],
            exact: true,
            refetchType: "all",
          }
        )
        
        
    }


    




  return (
    <div className="my-20 w-full p-6 bg-white rounded-xl max-w-[850px] mx-auto flex justify-center items-center flex-col gap-4">

        <div className="w-full flex flex-wrap justify-center md:justify-between items-center">
                  <img src="/chef.png" alt="chef" className="size-[350px] flex-shrink-0 object-cover"/>

                  <div className="flex flex-col gap-2 w-full md:w-[350px]">
                       <h1 className="text-3xl  text-darkGold">Can&apos;t decide on what to eat?</h1>
                       <p className="text-md italic mb-4 text-darkBrown">Good Kitchen&apos;s got your back! Search or select delicious meal recipes from our extensive catalog. </p>
                        <button className="h-10 cursor-pointer w-28  p-2 bg-darkBrown rounded-md text-sm text-white
                                 hover:bg-darkGold hover:text-black transition-all flex items-center justify-center"
                              onClick={onRandom}
                               >
                                Get Random Meal
                            </button>

                  </div>
        </div>


        <div className="w-full flex flex-wrap justify-between items-center gap-5 ">
              <FilterDropDown
                
              />
              <SearchForm 
                
              />
        </div>
    </div>
  )
}

export default Inquires