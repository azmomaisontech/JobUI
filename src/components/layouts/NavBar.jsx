import React from "react";
import { Link } from "react-router-dom";
import image from "../../image/azmotech.png";
import logo from "../../svg/logo.svg";

const NavBar = props => {
  return (
    <nav className={props.open ? "nav-open" : ""}>
      <div className="nav-wrapper">
        <div className="company-logo">
          <Link to="/">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <div className="nav-menu">
          <ul>
            <div className=" divide-line"></div>
            <li className="animate-search">
              <Link to="#">
                <div className="form-group">
                  <i className="fas fa-search iconspan"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </Link>
            </li>
            <div className="  divide-line"></div>

            <li>
              <Link to="#">
                <span className="relative-position">
                  <i className="far fa-envelope"></i>
                  <span className="absolute-position">1</span>
                </span>
                <span>Message</span>
              </Link>
            </li>
            <div className="divide-line"></div>

            <li>
              <Link to="#">
                <span className="relative-position">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="absolute-position">1</span>
                </span>
                Market Place
                <i className="fas fa-caret-down"></i>
              </Link>
            </li>
            <div className="divide-line"></div>

            <li>
              <Link to="#">
                <span className="relative-position">
                  <i className="fas fa-flag"></i>
                  <span className="absolute-position">1</span>
                </span>
                Notification
              </Link>
            </li>
            <div className="divide-line"></div>

            <li>
              <Link to="#">
                <img src={image} alt="Profile" />
                <span>
                  Me
                  <i className="fas fa-caret-down"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
