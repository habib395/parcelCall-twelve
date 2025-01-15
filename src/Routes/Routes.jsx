import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../components/Dashboard/Sidebar/Users/MyProfile";
import AddBook from "../components/Dashboard/Sidebar/Users/AddBook";
import MyParcel from "../components/Dashboard/Sidebar/Users/MyParcel";
import MyDelivery from "../components/Dashboard/Sidebar/DeliveryMan/MyDelivery";
import MyReview from "../components/Dashboard/Sidebar/DeliveryMan/MyReview";
import AllParcel from "../components/Dashboard/Sidebar/Admin/AllParcel";
import AllUser from "../components/Dashboard/Sidebar/Admin/AllUser";
import AllDeliveryMan from "../components/Dashboard/Sidebar/Admin/AllDeliveryMan";
import Statistics from "../components/Dashboard/Sidebar/Admin/Statistics";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        }
      ]
    },
    {path: '/login', element:<Login></Login>},
    {path: '/Register', element:<Register></Register>},
    {
      path:'/dashboard',
      element:(<DashboardLayout></DashboardLayout>),
      children:[
        {
          path: 'my-profile',
          element:<MyProfile></MyProfile>
        },
        {
          path: 'book-parcel',
          element: <AddBook></AddBook>
        },
        {
          path: 'my-order',
          element:<MyParcel></MyParcel>
        },
        {
          path: 'my-delivery',
          element:<MyDelivery></MyDelivery>
        },
        {
          path: 'my-review',
          element:<MyReview></MyReview>
        },
        {
          path: 'all-parcel',
          element:<AllParcel></AllParcel>
        },
        {
          path:'all-user',
          element:<AllUser></AllUser>
        },
        {
          path:'all-deliveryMan',
          element: <AllDeliveryMan></AllDeliveryMan>
        },
        {
          path: 'statistic',
          element:<Statistics></Statistics>
        }
      ]
    }
  ]);