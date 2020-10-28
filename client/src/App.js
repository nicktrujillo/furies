import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Counter } from "./features/counter/Counter";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path='/'>
          <Landing />
        </Route>
        <section className='container'>
          <Switch>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;
