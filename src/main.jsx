import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './root/Root.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Register from './Pages/registration/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import AddFood from './Pages/AddFood/AddFood.jsx';
import AllFood from './Pages/AllFood/AllFood.jsx';
import AvailableFood from './Pages/Available Food/AvailableFood.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import FoodDetails from './Pages/FoodDetails/FoodDetails.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import MangeFood from './Pages/MangeFood/MangeFood.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addFood',
        element: <ProtectedRoutes><AddFood></AddFood></ProtectedRoutes>
      },
      {
        path: '/allFood',
        element: <AllFood></AllFood>
      },
      {
        path: '/available',
        element: <ProtectedRoutes><AvailableFood></AvailableFood></ProtectedRoutes>
      },
      {
        path:'/details/:id',
        element:<ProtectedRoutes><FoodDetails></FoodDetails></ProtectedRoutes>
      },
      {
        path:'/manageAll',
        element:<ProtectedRoutes><MangeFood></MangeFood></ProtectedRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
