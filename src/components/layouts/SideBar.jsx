import React from "react";
import { Link } from "react-router-dom";
import hamburger from "../../svg/hamburger.svg";
import first from "../../svg/first.svg";
import second from "../../svg/time-left.svg";
import third from "../../svg/file.svg";
import fourth from "../../svg/shopping-cart.svg";
import fifth from "../../svg/supply.svg";
import sixth from "../../svg/chat.svg";
import seventh from "../../svg/settings.svg";

const SideBar = props => {
  const { open } = props;
  return (
    <aside id="side-bar" className={open ? "aside-open" : ""}>
      <div className="hamburger">
        <div onClick={props.handleClick}>
          {open ? (
            <i className="fas fa-times close"></i>
          ) : (
            <img src={hamburger} alt="Hamburger Menu" className="open" />
          )}
        </div>
      </div>
      <div className="nav-list  bg-gray">
        <ul>
          <li>
            <Link to="#">
              <img src={first} alt="Dashboard Icon" />
              <span className="menu-list"> Dashboard </span>
            </Link>
          </li>
          <li>
            <Link to="#about">
              <img src={second} alt="Operations Icon" />
              <span className="menu-list"> Operations </span>
            </Link>
          </li>

          <li>
            <Link to="#service">
              <img src={third} alt="Records" />
              <span className="menu-list"> Records </span>
            </Link>
          </li>
          <li>
            <Link to="#project">
              <img src={fourth} alt="Supply Store" />
              <span className="menu-list"> Supply Store </span>
            </Link>
          </li>
          <li>
            <Link to="#blog">
              <img src={fifth} alt="Market Place" />
              <span className="menu-list"> Market Place </span>
            </Link>
          </li>
          <li>
            <Link to="#contact">
              <img src={sixth} alt="Forums" />
              <span className="menu-list"> Forums </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings">
        <li>
          <Link to="#">
            <img src={seventh} alt="Settings" />
            <span className="menu-list"> </span>Settings
          </Link>
        </li>
      </div>
    </aside>
  );
};

export default SideBar;
