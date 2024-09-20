import { useSearch, useRouteContext } from "@tanstack/react-router";
import MealsPage from "./MealsPage";
import { customFetch } from "../utils";
import Inquires from "../components/Inquires";
import SearchPage from "./SearchMealPage";

const allQueries = (url) => {
  return {
    queryKey: ["meals", url],
    queryFn: () => customFetch.get(`/${url}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ location }) => {
    const { search } = location;
    const key = Object.keys(search)[0];

    let additionalUrl;

    if (key === undefined) {
      additionalUrl = "";
    } else {
      additionalUrl = `${key}/${search[key]}`;
    }

    try {
      const resp = await queryClient.ensureQueryData(allQueries(additionalUrl));
      return {
        meals: resp.data,
        mealType: search[key] || "All Meals",
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

const HomePage = () => {
  const params = useSearch({ from: "/" });

  if (params?.search) {
    return (
      <>
        <Inquires />
        <SearchPage />;
      </>
    );
  }

  return (
    <>
      <Inquires />
      <MealsPage />
    </>
  );
};

export default HomePage;
