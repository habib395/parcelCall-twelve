import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DeliveryManRoute from "./DeliveryManRoute";
import UpdateParcel from "../components/Form/UpdateParcel";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/Register", element: <Register></Register> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "book-parcel",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: 'update/:id',
        element: <UpdateParcel></UpdateParcel>,
        loader: ({ params }) =>
          axios.get(`http://localhost:5000/books/${params.email}/${params.id}`).then((response) =>response.data)
      },
      {
        path: "my-order",
        element: (
          <PrivateRoute>
            <MyParcel></MyParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "my-delivery",
        element: (
          <PrivateRoute>
            <DeliveryManRoute>
              <MyDelivery></MyDelivery>
            </DeliveryManRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-review",
        element: (
          <PrivateRoute>
            <DeliveryManRoute>
              <MyReview></MyReview>
            </DeliveryManRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-parcel",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllParcel></AllParcel>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-user",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUser></AllUser>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-deliveryMan",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllDeliveryMan></AllDeliveryMan>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "statistic",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Statistics></Statistics>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
