// client/src/components/Layout/AuthTabs.jsx
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import "../../styles/AuthTabs.css";

const AuthTabs = ({ setIsAuthenticated }) => {
  return (
    <div className="auth-tabs-container">
      {/* Rocket animation container */}
      <div className="floating-rocket">
        <img
          src="/assets/rocket.svg"
          alt="Floating Rocket"
          className="rocket-animation"
        />
      </div>

      {/* Tabs for Login and Signup */}
      <Tabs className="custom-tabs">
        <TabList className="custom-tab-list">
          <Tab className="custom-tab" selectedClassName="selected-tab">
            Login
          </Tab>
          <Tab className="custom-tab" selectedClassName="selected-tab">
            Signup
          </Tab>
        </TabList>

        <TabPanel className="custom-tab-panel">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <Signup />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AuthTabs;
