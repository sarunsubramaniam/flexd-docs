import React from "react";
import "./css/flexmaster.css";
import "./App.scss";
import { DataProvider } from "./Context";
import Landing from "./components/Landing";
import Body from "./components/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/components" component={Body} />
          </Switch>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
