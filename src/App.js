import React from "react";
import "./css/flexd.css";
import "./App.scss";
import { DataProvider } from "./components/Context/Context";
import Landing from "./components/Pages/Landing";
import Documentation from "./components/Pages/Documentation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/documentation" component={Documentation} />
          </Switch>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
