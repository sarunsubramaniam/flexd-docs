import React from "react";
import "./css/flexmaster.css";
import "./App.scss";
import { DataProvider } from "./components/Context/Context";
import Landing from "./components/Common/Landing";
import Body from "./components/Common/Body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/get-started" component={Body} />
          </Switch>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
