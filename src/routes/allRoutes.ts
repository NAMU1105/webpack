import React from "react";
import { Redirect } from "react-router-dom";

// TODO: page도 폴더 나누기

// Dashboard
//import Dashboard from "../pages/dashboard";
//import Orders from "../pages/orders";
//import Users from "../pages/users";
//import UserDetail from "../pages/userDetail";
//import AddPost from "../pages/addPost";
//import AddProduct from "../pages/addProduct";
//import Products from "../pages/products";

// Authentication related pages
import Auth from "../pages/auth";
//import ConfirmEmail from "../pages/confirmEmail";
//import NewPassword from "../pages/newPassword";
//import Settings from "../pages/setting";

//const userRoutes = [
//  { path: "/dashboard", component: Dashboard },
//  { path: "/orders", component: Orders },
//  { path: "/users", component: Users },
//  { path: "/users/:userId", component: UserDetail },
//  { path: "/products", component: Products },
//  { path: "/posts/new", component: AddPost },
//  { path: "/products/new", component: AddProduct },
//
//  // this route should be at the end of all other routes
//  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
//];

const authRoutes = [
  { path: ["/login", "/signup", "/password", "/confirm"], component: Auth },
  // { path: "/auth", component: Auth },
  // { path: "/confirmEmail", component: ConfirmEmail },
  // { path: "/password", component: NewPassword },
  // { path: "/settings", component: Settings },
];

export { authRoutes };
//export { userRoutes, authRoutes };
