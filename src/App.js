import React from "react";
import "./App.css";
import AuthPage from "./components/Pages/AuthPage";
import { Route } from "react-router-dom";

import MailDetails from "./components/Mail/MailDetails";
import ManagedMails from "./components/Mail/ManagedMails";

import Showsentedmails from "./components/Mail/SentDetails";
import { Button } from "react-bootstrap";

// import AuthPage from './components/Pages/AuthPage';
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          @Shivam-MailBox
        </Button>
      </div>

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
