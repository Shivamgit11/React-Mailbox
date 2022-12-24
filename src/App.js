import React from "react";
import "./App.css";
import AuthPage from "./components/Pages/AuthPage";
import { Redirect, Route } from "react-router-dom";

import ManagedMails from "./components/Mail/ManagedMails";





function App() {
  return (
    <main>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      

      <Route path="/mail">
        {/* <Mailfirst /> */}
        <ManagedMails />
      </Route>
    </main>
  );
}

export default App;
