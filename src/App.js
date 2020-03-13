import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/layouts/SideBar";
import NavBar from "./components/layouts/NavBar";
import Main from "./components/pages/Main";
import Product from "./components/pages/Product";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleHamburger = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div className="home">
        <SideBar open={open} handleClick={handleHamburger} />
        <NavBar open={open} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Main {...props} open={open} />}
          />
          <Route
            exact
            path="/product"
            render={props => <Product {...props} open={open} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
