import { useLoaderData } from "@tanstack/react-router";
import Card from "../components/Card";
import SkeletonLoader from "../components/SkeletonLoader";
import { useIsFetching } from "@tanstack/react-query";

const MealsPage = () => {
  const isFetching = useIsFetching({ queryKey: ["meals"] });
  const { meals, mealType } = useLoaderData({ from: "/" });

  if (isFetching) {
    return <SkeletonLoader />;
  }

  if (!meals && !isFetching) {
    return (
      <h1 className="text-3xl  bg-white text-darkBrown">Error loading meals</h1>
    );
  }

  return (
    <section className="mt-20  min-h-screen w-full p-6 bg-white rounded-t-xl flex justify-start items-start flex-col gap-8">
      <h1 className="text-2xl text-darkBrown capitalize">{mealType}</h1>
      <div className="grid grid-cols-auto-fill w-full gap-8 items-start">
        {Array.isArray(meals) ? (
          meals.map((meal) => <Card key={meal.id} {...meal} />)
        ) : (
          <Card key={meals.id} {...meals} />
        )}
      </div>
    </section>
  );
};

export default MealsPage;
