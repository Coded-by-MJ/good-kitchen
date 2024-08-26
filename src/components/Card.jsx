import { useState } from "react";


const Card = ({name, type, ingredients}) => {

    const [showList, setShowList] = useState(false);



  return (
    <div className="group flex flex-col gap-2 shadow-inner w-full cursor-pointer rounded-md border-[1px] border-darkBrown hover:ring-1
      hover:ring-darkGold hover:ring-offset-1 transition-all p-2
    ">
        <h2 className="text-2xl text-darkGold transition-all">{name}</h2>
        <span className="inline-block mb-4 text-sm text-darkBrown">{type}</span>

    
        <button 
         onClick={() => setShowList(prev => !prev)}
        className="h-10 mb-4 transition-all hover:bg-darkGold hover:text-darkBrown active:bg-darkGold active:text-darkBrown cursor-pointer p-2 w-[110px] rounded-md bg-darkBrown text-sm text-white flex items-center justify-center">

            {showList ? 'Hide' : 'View'} Ingredients
        </button>
        {showList && (
         <ul className="w-full list-disc list-inside">
            {
                ingredients.map((ingredients, idx) => (
                    <li key={idx} className="text-sm text-darkBrown">{ingredients}</li>
                ))
            }
          </ul>
         )}
    </div>
  )
}

export default Card