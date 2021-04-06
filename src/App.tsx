import React from "react";
import { hot } from "react-hot-loader/root";
import { ApolloProvider } from "@apollo/client/react";

import Card from "./components/card";

// const client = new ApolloClient({ uri, cache });

const App = () => {
  return (
    <div className="font-inter">
      {/* <ApolloProvider client={client}> */}
      Hello, Webpack and typescript!!!!!
      <Card />
      {/* </ApolloProvider> */},
    </div>
  );
};
// export default App;
export default hot(App);
