import React from "react";
import Footer from "../layouts/Footer";
import product from "../../svg/product.svg";
import Table from "../layouts/Table";

const Main = props => {
  const handleClick = () => {
    props.history.push("/product");
  };

  return (
    <main className={props.open ? "main-open" : ""}>
      <div className="top-page">
        <div className="left-top">
          <img src={product} alt="" />
          <span className="text-secondary text-large text-bold">
            Production house
          </span>
        </div>
        <div className="right-top">
          <select name="category" className="select-css">
            <option value="Categories">Category</option>
            <option value="Categories">Category</option>
            <option value="Categories">Category</option>
          </select>
          <div className="input-field">
            <input type="text" />
            <i className="fas fa-times close"></i>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="middle-page">
        <div className="top">
          <div className="left">
            <span className="text-primary">All Productions</span>{" "}
            <span>192</span>
            <div className="divide-line"></div>
            <span className="text-secondary">Awaiting Production </span>
            <span className="badge">19</span>
            <div className="divide-line"></div>
            <div className="text-secondary">Completed</div>
          </div>
          <div className="right">
            <span className="btn btn-light">Printed worksheet</span>
            <span className="middle-child">
              Mark as Complete <i className="fas fa-caret-down"></i>
            </span>
            <span className="btn btn-gray">Save</span>
          </div>
        </div>
        <div className="bottom">
          <Table handleClick={handleClick} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
