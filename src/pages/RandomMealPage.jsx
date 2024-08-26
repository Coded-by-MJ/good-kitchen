import Card from "../components/Card"
import { useQuery } from "@tanstack/react-query"
import SkeletonLoader from "../components/SkeletonLoader"
import { getRandomMeal } from "../../api/getRandomMeal"

const RandomMealPage = () => {

  
  const { data, error, status } = useQuery({
    queryKey: ["random"],
    queryFn: getRandomMeal,
   
})


if(status === 'pending') {
   return ( <SkeletonLoader /> )
}


if(status === 'error') {
   return ( <h1 className="text-3xl  bg-white text-darkBrown">Error loading meals: {error.message}</h1> )
}





  return (
   
    <section className="mt-20 w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
      <h1 className="text-2xl text-darkBrown capitalize">Random Meal</h1>
         <div className="grid grid-cols-auto-fill w-full gap-8 ">
             { 
                      
                        <Card key={data.id} {...data} />
                

             }

         </div>
    </section>
  
  )
}

export default RandomMealPage