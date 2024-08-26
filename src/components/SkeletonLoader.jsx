
const SkeletonLoader = () => {


    return (
        <section className="mt-20 w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
          <h1 className="h-10 transition-all bg-skele p-2 w-[110px] rounded-md"></h1>
            
             <div className="grid grid-cols-auto-fill w-full gap-8 ">
    
                 {
                      Array.from({ length: 20 }).map((_, idx) => (
                        <SkeletonCard key={idx} />
                    ))
                 }
    
             </div>
        </section>
  )
}


const SkeletonCard = () => {
    return (
        <div className="group flex flex-col gap-2  w-full cursor-pointer rounded-md border-[1px] border-skele hover:ring-1
       p-2
      ">
          <h2 className="h-10 transition-all bg-skele p-2 w-[110px] rounded-md"></h2>
          <span className="inline-block mb-4 h-5 transition-all bg-skele p-2 w-[50px] rounded-md"></span>
  
      
          <button 
           className="h-10 mb-4 transition-all bg-skele p-2 w-[110px] rounded-md">
  
       
          </button>
          
      </div>
    )
}



export default SkeletonLoader