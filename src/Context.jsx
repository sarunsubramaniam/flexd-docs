import React, { createContext, useState, useEffect } from "react";
import GetStarted from "./components/GetStarted";
import Grid from "./components/Grid";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import Typography from "./components/Typography";
import Alerts from "./components/Alerts";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import Table from "./components/Table";
import Inputs from "./components/Inputs";

export const DataConsumer = createContext();
export const DataProvider = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      dataId: "getting-started",
      name: "Get Started",
      component: <GetStarted />,
      display: true,
    },
    {
      id: 2,
      dataId: "grid",
      name: "Grid",
      component: <Grid />,
      display: true,
    },
    {
      id: 3,
      dataId: "accordion",
      name: "Accordion",
      component: <Accordion />,
      display: true,
    },
    {
      id: 4,
      dataId: "alerts",
      name: "Alerts",
      component: <Alerts />,
      display: true,
    },
    {
      id: 5,
      dataId: "buttons",
      name: "Buttons",
      component: <Buttons />,
      display: true,
    },
    {
      id: 6,
      dataId: "card",
      name: "Card",
      component: <Card />,
      display: true,
    },
    {
      id: 7,
      dataId: "table",
      name: "Table",
      component: <Table />,
      display: true,
    },
    {
      id: 8,
      dataId: "tabs",
      name: "Tabs",
      component: <Tabs />,
      display: true,
    },
    {
      id: 9,
      dataId: "typography",
      name: "Typography",
      component: <Typography />,
      display: true,
    },
    {
      id: 10,
      dataId: "inputs",
      name: "Inputs",
      component: <Inputs />,
      display: true,
    },
  ]);

  return (
    <DataConsumer.Provider value={[data, setData]}>
      {props.children}
    </DataConsumer.Provider>
  );
};
