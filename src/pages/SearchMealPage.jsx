import Card from "../components/Card"
import { useQuery } from "@tanstack/react-query"
import SkeletonLoader from "../components/SkeletonLoader"
import { getSearchMeal } from "../../api/getSearchMeal"

const SearchPage = ({ queryParams }) => {

  
  const { data, status } = useQuery({
    queryKey: ["search", queryParams],
    queryFn: () => getSearchMeal(queryParams),
    retry: 2
   
})


if(status === 'pending') {
   return ( <SkeletonLoader /> )
}


if(status === 'error') {
   return ( <h1 className="text-3xl text-darkBrown bg-white">No Search Results for {`'${queryParams}'`}</h1> )
}





  return (
   
    <section className="mt-20 w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
      <h1 className="text-2xl text-darkBrown capitalize">{queryParams}</h1>
         <div className="grid grid-cols-auto-fill w-full gap-8 ">
             { 
                      data.map((meal) => (
                        <Card key={meal.id} {...meal} />
                    ))

             }

         </div>
    </section>
  
  )
}

export default SearchPage