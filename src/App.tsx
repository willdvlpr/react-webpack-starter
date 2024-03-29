import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
