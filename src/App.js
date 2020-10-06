import React from "react";
import "./css/flexd.css";
import "./App.scss";
import { DataProvider } from "./components/Context/Context";
import Landing from "./components/Common/Landing";
import Body from "./components/Common/Body";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <Router>
          <Switch>
            <Route path="/" component={withRouter(Landing)} exact />
            <Route path="/documentation" component={withRouter(Body)} />
          </Switch>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
