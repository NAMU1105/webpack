import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

interface AuthMiddleWareProps {
  path: string | Array<string>;
  component: React.FC<any>;
  isAuthProtected: boolean;
}

const Authmiddleware: React.FC<AuthMiddleWareProps> = ({
  component: Component,
  isAuthProtected,
  ...rest
  // layout: Layout,
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem("userData")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return (
        // <Layout>
        <Component {...props} />
        // </Layout>
      );
    }}
  />
);

export default Authmiddleware;
