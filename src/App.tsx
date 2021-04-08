import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import { hot } from "react-hot-loader/root";
// routes
import { authRoutes } from "./routes/allRoutes";

// router component
import Authmiddleware from "./routes/middleware/authMiddleWare";

// import Card from "./components/card";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";

//import Auth from "./pages/auth";

const App = () => {
  return (
    <div id="app" className="font-inter bg-gray-100">
      <Router>
        <Header />
        <main className="min-h-content p-6">
          <Switch>
            {authRoutes.map((route, idx) => (
              <Authmiddleware
                path={route.path}
                // layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            <Redirect to="/login" />
          </Switch>

          {/* <Card /> */}
        </main>
        <Footer />
      </Router>
    </div>
  );
};
// export default App;
export default hot(App);
