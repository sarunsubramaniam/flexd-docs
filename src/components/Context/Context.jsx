import React, { createContext, useState } from "react";
import Grid from "../Categories/Layout/Grid";
import Breakpoints from "../Categories/Layout/Breakpoints";
import Wrapper from "../Categories/Layout/Wrapper";
import Cards from "../Categories/Components/Cards";
import QuickStart from "../Categories/GetStarted/QuickStart";
import Overview from "../Categories/GetStarted/Overview";
import Buttons from "../Categories/Elements/Buttons";
import Typography from "../Categories/Helpers/Typography";
import Margin from "../Categories/Helpers/Margin";
import Padding from "../Categories/Helpers/Padding";
import ColorPicker from "../Categories/Utilities/ColorPicker";
import Flex from "../Categories/Utilities/Flex";
import Alerts from "../Categories/Elements/Alerts";
import Tabs from "../Categories/Components/Tabs";
import Accordion from "../Categories/Components/Accordion";
import Table from "../Categories/Elements/Table";
import Inputs from "../Categories/Form/Inputs";
import Textarea from "../Categories/Form/Textarea";
import Checkbox from "../Categories/Form/Checkbox";
import Radio from "../Categories/Form/Radio";
import Scaffold from "../Categories/GetStarted/Scaffold";

export const DataConsumer = createContext();
export const DataProvider = (props) => {
  const [tab, setTab] = useState({ currentTab: "getStarted" });
  const [data, setData] = useState({
    getStarted: [
      {
        id: 1,
        dataId: "overview",
        name: "Overview",
        component: <Overview />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
        description:
          "Flexd is a open source CSS Framework built with flexbox and compiled using SCSS (CSS Preprocessor). It helps to create elegant, responsive and flexible layouts.",
      },
      {
        id: 2,
        dataId: "quick-start",
        name: "Quick Start",
        component: <QuickStart />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 3,
        dataId: "scaffold",
        name: "Scaffold",
        component: <Scaffold />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    layout: [
      {
        id: 4,
        dataId: "grid",
        name: "Grid",
        component: <Grid />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 5,
        dataId: "wrapper",
        name: "Wrapper",
        component: <Wrapper />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 6,
        dataId: "breakpoints",
        name: "Breakpoints",
        component: <Breakpoints />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    components: [
      {
        id: 7,
        dataId: "cards",
        name: "Cards",
        component: <Cards />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 8,
        dataId: "tabs",
        name: "Tabs",
        component: <Tabs />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 9,
        dataId: "accordion",
        name: "Accordion",
        component: <Accordion />,
        display: true,
        category: "Components",
        theme: "flexd-yellow",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    elements: [
      {
        id: 10,
        dataId: "buttons",
        name: "Buttons",
        component: <Buttons />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 11,
        dataId: "table",
        name: "Table",
        component: <Table />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 12,
        dataId: "alerts",
        name: "Alerts",
        component: <Alerts />,
        display: true,
        category: "Elements",
        theme: "flexd-green",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    form: [
      {
        id: 13,
        dataId: "inputs",
        name: "Inputs",
        component: <Inputs />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 14,
        dataId: "textarea",
        name: "Textarea",
        component: <Textarea />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 15,
        dataId: "checkbox",
        name: "Checkbox",
        component: <Checkbox />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 15,
        dataId: "radio",
        name: "Radio",
        component: <Radio />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    helpers: [
      {
        id: 15,
        dataId: "typography",
        name: "Typography",
        component: <Typography />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 16,
        dataId: "margin",
        name: "Margin",
        component: <Margin />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 17,
        dataId: "padding",
        name: "Padding",
        component: <Padding />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    utilities: [
      {
        id: 18,
        dataId: 'color-picker',
        name: 'Color Picker',
        component: <ColorPicker />,
        display: true,
        category: 'Utilities',
        theme: 'flexd-yellow',
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 19,
        dataId: 'flex',
        name: 'Flex',
        component: <Flex />,
        display: true,
        category: 'Utilities',
        theme: 'flexd-yellow',
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      }
    ]
  });

  return (
    <DataConsumer.Provider
      value={{ dataVal: [data, setData], tabVal: [tab, setTab] }}
    >
      {props.children}
    </DataConsumer.Provider>
  );
};
