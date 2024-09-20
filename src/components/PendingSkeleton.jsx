import SkeletonLoader from "./SkeletonLoader";

const PendingSkeleton = () => {
  return (
    <>
      <div className="my-20 w-full p-6 bg-white rounded-xl max-w-[850px] mx-auto flex justify-center items-center flex-col gap-4">
        <div className="w-full flex flex-wrap justify-center md:justify-between items-center">
          <div className="size-[350px] bg-skele flex-shrink-0 object-cover"></div>

          <div className="flex flex-col gap-2 w-full md:w-[350px]">
            <h1 className="text-3xl bg-skele"></h1>
            <p className="text-md italic mb-4 bg-skele"></p>
            <div
              className="h-10 cursor-pointer w-28  p-2 bg-skele rounded-md 
                               "
            ></div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center gap-5 ">
          <div className="w-[150px]   h-12 p-2 flex  border-[1px] rounded-md bg-skele"></div>
          <div className="w-[150px]   h-12 p-2 flex  border-[1px] rounded-md bg-skele"></div>
        </div>
      </div>

      <SkeletonLoader />
    </>
  );
};
export default PendingSkeleton;
