// client/src/components/Layout/AuthTabs.jsx
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import LogoutButton from "../Auth/LogoutButton";

const AuthTabs = ({ setIsAuthenticated }) => (
  <Tabs>
    <TabList>
      <Tab>Login</Tab>
      <Tab>Signup</Tab>
      <Tab>Logout</Tab>
    </TabList>

    <TabPanel>
      <Login setIsAuthenticated={setIsAuthenticated} />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
    <TabPanel>
      <LogoutButton setIsAuthenticated={setIsAuthenticated} />
    </TabPanel>
  </Tabs>
);

export default AuthTabs;
