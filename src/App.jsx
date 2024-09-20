import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
} from "@tanstack/react-router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import GlobalProvider from "./provider/GlobalProvider";
import PendingSkeleton from "./components/PendingSkeleton";

import { loader as homeLoader } from "./pages/HomePage";
import Error from "./pages/Error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  const rootRoute = createRootRoute({
    component: MainLayout,
  });

  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
    loader: homeLoader(queryClient),
    errorComponent: Error,
    pendingComponent: PendingSkeleton,
  });

  const routeTree = rootRoute.addChildren([homeRoute]);

  const router = createRouter({
    routeTree,
    defaultNotFoundComponent: NotFoundPage,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
