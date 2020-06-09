import React from "react";

// import Login from "./Login/Login";
// import Register from "./Login/Register";
// import ForgotPassword from "./Login/ForgotPassword";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset-password" component={ForgotPassword} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
