import Card from "../components/Card";
import { useIsFetching } from "@tanstack/react-query";
import { useLoaderData, useSearch } from "@tanstack/react-router";
import SkeletonLoader from "../components/SkeletonLoader";

const SearchPage = () => {
  const isFetching = useIsFetching({ queryKey: ["meals"] });
  const data = useLoaderData({ from: "/" });
  const params = useSearch({ from: "/" });

  if (isFetching) {
    return <SkeletonLoader />;
  }

  if (!data?.meals && !isFetching) {
    return (
      <h1 className="text-3xl text-darkBrown bg-white">
        No Search Results for {`'${params.search}'`}
      </h1>
    );
  }

  return (
    <section className="mt-20 w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
      <h1 className="text-2xl text-darkBrown capitalize">{data?.mealType}</h1>
      <div className="grid grid-cols-auto-fill w-full gap-8 items-start ">
        {data?.meals.map((meal) => (
          <Card key={meal.id} {...meal} />
        ))}
      </div>
    </section>
  );
};

export default SearchPage;
