import React, { createContext, useState } from "react";
import Grid from "../Categories/Layout/Grid";
import Breakpoints from "../Categories/GetStarted/Breakpoints";
import Wrapper from "../Categories/Layout/Wrapper";
import Cards from "../Categories/Components/Cards";
import QuickStart from "../Categories/GetStarted/QuickStart";
import Navbar from "../Categories/Components/Navbar";
import Banner from "../Categories/Layout/Banner";
import Footer from "../Categories/Layout/Footer";
import Overview from "../Categories/GetStarted/Overview";
import Buttons from "../Categories/Elements/Buttons";
import Typography from "../Categories/Helpers/Typography";
import Margin from "../Categories/Helpers/Margin";
import Padding from "../Categories/Helpers/Padding";
import Flex from "../Categories/Helpers/Flex";
import Color from "../Categories/Helpers/Color";
import Alerts from "../Categories/Elements/Alerts";
import Tabs from "../Categories/Components/Tabs";
import Dropdown from "../Categories/Components/Dropdown";
import Modal from "../Categories/Components/Modal";
import Pagination from "../Categories/Components/Pagination.jsx";
import Accordion from "../Categories/Components/Accordion";
import Table from "../Categories/Elements/Table";
import Inputs from "../Categories/Form/Inputs";
import Textarea from "../Categories/Form/Textarea";
import Checkbox from "../Categories/Form/Checkbox";
import Radio from "../Categories/Form/Radio";
import Select from "../Categories/Form/Select";
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
      {
        id: 4,
        dataId: "breakpoints",
        name: "Breakpoints",
        component: <Breakpoints />,
        display: true,
        category: "Get Started",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    layout: [
      {
        id: 5,
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
        id: 6,
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
        id: 7,
        dataId: "banner",
        name: "Banner",
        component: <Banner />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 8,
        dataId: "footer",
        name: "Footer",
        component: <Footer />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
    ],
    components: [
      {
        id: 9,
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
        id: 10,
        dataId: "navbar",
        name: "Navbar",
        component: <Navbar />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 11,
        dataId: "dropdown",
        name: "Dropdown",
        component: <Dropdown />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 12,
        dataId: "modal",
        name: "Modal",
        component: <Modal />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 13,
        dataId: "pagination",
        name: "Pagination",
        component: <Pagination />,
        display: true,
        category: "Layout",
        theme: "flexd-blue-dark",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
        dataId: "radio",
        name: "Radio",
        component: <Radio />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 23,
        dataId: "select",
        name: "Select",
        component: <Select />,
        display: true,
        category: "Form",
        theme: "flexd-orange",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      }
    ],
    helpers: [
      {
        id: 24,
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
        id: 25,
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
        id: 26,
        dataId: "padding",
        name: "Padding",
        component: <Padding />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 27,
        dataId: "flex",
        name: "Flex",
        component: <Flex />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
      {
        id: 28,
        dataId: "color",
        name: "Color",
        component: <Color />,
        display: true,
        category: "Helper Classes",
        theme: "flexd-blue-light",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo consequuntur alias, debitis voluptatibus repellat corporis. Possimus dicta reprehenderit nesciunt nam magni dignissimos.",
      },
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
