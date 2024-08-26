import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
} from "@tanstack/react-router"

import NotFoundPage from "./pages/NotFoundPage"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import GlobalProvider from "./provider/GlobalProvider"



function App() {

  

  const rootRoute = createRootRoute({
    component: MainLayout,
 })

 const homeRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/',
   component: HomePage
 }) 



  const routeTree = rootRoute.addChildren([
    homeRoute,

  ])


  
  const router = createRouter({ routeTree,
    defaultNotFoundComponent: NotFoundPage
  })


  return  (
 
      <GlobalProvider>
           <RouterProvider router={router} />
      </GlobalProvider>
      

  )
 


}

export default App
