import React, { useState } from "react";
import SideBar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import Main from "../layouts/Main";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleHamburger = () => {
    setOpen(!open);
  };

  return (
    <div className="home">
      <SideBar open={open} handleClick={handleHamburger} />
      <NavBar open={open} />
      <Main open={open} />
    </div>
  );
};

export default Home;
