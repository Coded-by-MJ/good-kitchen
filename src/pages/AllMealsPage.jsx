import Card from "../components/Card";
import { getAllMeals } from "../../api/getAllMeals";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../components/SkeletonLoader";

const AllMealsPage = () => {
  const { data, error, status } = useQuery({
    queryKey: ["all meals"],
    queryFn: getAllMeals,
    staleTime: 1000 * 60 * 5,
  });

  if (status === "pending") {
    return <SkeletonLoader />;
  }

  if (status === "error") {
    return (
      <h1 className="text-3xl  bg-white text-darkBrown">
        Error loading meals: {error.message}
      </h1>
    );
  }

  return (
    <section className="mt-20 w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
      <h1 className="text-2xl text-darkBrown">All Meals</h1>
      <div className="grid grid-cols-auto-fill w-full gap-8 items-start">
        {data.map((meal) => (
          <Card key={meal.id} {...meal} />
        ))}
      </div>
    </section>
  );
};

export default AllMealsPage;
