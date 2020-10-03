import React, { createContext, useState } from "react";
import Grid from "../Categories/Layout/Grid";
import Card from "../Categories/Components/Card";
import QuickStart from "../Categories/GetStarted/QuickStart";
import Overview from "../Categories/GetStarted/Overview";
import Buttons from "../Categories/Elements/Buttons";
import Typography from "../Categories/Helpers/Typography";
import Alerts from "../Categories/Elements/Alerts";
import Tabs from "../Categories/Components/Tabs";
import Accordion from "../Categories/Components/Accordion";
import Table from "../Categories/Elements/Table";
import Inputs from "../Categories/Form/Inputs";

export const DataConsumer = createContext();
export const DataProvider = (props) => {
  const [data, setData] = useState({
    page: "getStarted",
    getStarted: [
      {
        id: 1,
        dataId: "overview",
        name: "Overview",
        component: <Overview />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
      },
      {
        id: 2,
        dataId: "quick-start",
        name: "Quick Start",
        component: <QuickStart />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
      },
    ],
    layout: [
      {
        id: 3,
        dataId: "grid",
        name: "Grid",
        component: <Grid />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
      },
    ],
    components: [
      {
        id: 4,
        dataId: "card",
        name: "Card",
        component: <Card />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
      },
      {
        id: 5,
        dataId: "tabs",
        name: "Tabs",
        component: <Tabs />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
      },
      {
        id: 6,
        dataId: "accordion",
        name: "Accordion",
        component: <Accordion />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
      },
    ],
    elements: [
      {
        id: 7,
        dataId: "buttons",
        name: "Buttons",
        component: <Buttons />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
      },
      {
        id: 8,
        dataId: "table",
        name: "Table",
        component: <Table />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
      },
      {
        id: 9,
        dataId: "alerts",
        name: "Alerts",
        component: <Alerts />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
      },
    ],
    form: [
      {
        id: 10,
        dataId: "inputs",
        name: "Inputs",
        component: <Inputs />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
      },
    ],
    helpers: [
      {
        id: 11,
        dataId: "typography",
        name: "Typography",
        component: <Typography />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
      },
    ],
  });

  return (
    <DataConsumer.Provider value={[data, setData]}>
      {props.children}
    </DataConsumer.Provider>
  );
};
