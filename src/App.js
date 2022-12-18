import React from "react";
import "./App.css";
import AuthPage from "./components/Pages/AuthPage";
import { Redirect, Route } from "react-router-dom";

import MailDetails from "./components/Mail/MailDetails";
import ManagedMails from "./components/Mail/ManagedMails";

import Showsentedmails from "./components/Mail/SentDetails";
import { Button } from "react-bootstrap";

// import AuthPage from './components/Pages/AuthPage';
// import { Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <main>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      {/* <Route path="/inbox" exact>
        <Inbox />
      </Route> */}
      <Route path="/inbox/details" exact>
        <MailDetails />
      </Route>
      <Route path="/sent/details" exact>
        <Showsentedmails />
      </Route>
      <Route path="/mail">
        {/* <Mailfirst /> */}
        <ManagedMails />
      </Route>
    </main>
  );
}

export default App;
