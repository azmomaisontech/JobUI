import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import product from "../../svg/product.svg";

const Product = props => {
  return (
    <main className={props.open ? "main-open" : ""}>
      <div className="product-top-page">
        <div className="product-first">
          <div className="back">
            <i class="fas fa-arrow-left"></i>
            <span className="text-gray">Back</span>
          </div>
          <div className="divide-line"></div>
          <div className="production-house">
            <img src={product} alt="Production" />
            <span className="text-secondary text-large text-bold">
              Production house
            </span>
          </div>
        </div>
        <div className="product-second">
          <h3 className="text-bold">Order: #AD39JD9383W </h3>
        </div>
        <div className="product-third">
          <div className="left">
            <span className="text-sm text-primary">
              {" "}
              Account Setup <i class="fas fa-chevron-right"></i> Delivery Method{" "}
            </span>
          </div>
          <div className="right">
            <span className="text-primary">Production Status</span>{" "}
            <span className="text-green text-medium">Running 2 of 4</span>
          </div>
        </div>
        <div className="product-fourth">
          <table>
            <thead>
              <tr>
                <th>
                  <i class="fas fa-shopping-cart"></i> Order Value
                </th>
                <th>Order Date</th>
                <th>Delivery Method</th>
                <th> Rush Option</th>
                <th>Status</th>
                <th> Requested By</th>
                <th>Shipped or Picked Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <span className="text-primary">#$40,000</span>{" "}
                </td>
                <td>
                  {" "}
                  <span className="text-primary">25 - June - 2017</span>
                </td>
                <td>
                  <span className="text-primary">Pickup Order</span>{" "}
                  <Link t0="#">
                    <span className="text-green">Can Edit </span>{" "}
                    <i className="fas fa-caret-down"></i>
                  </Link>{" "}
                </td>
                <td>
                  <span className="rush">
                    <i class="fas fa-check"></i>
                  </span>
                  <span className="text-primary">Rush</span>
                </td>
                <td>
                  {" "}
                  <span className="text-primary">Pending</span>{" "}
                </td>
                <td>
                  <span className="text-primary">#23 - June - 2019</span>{" "}
                  <span className="text-green"> Time Left: 10:00:00</span>
                </td>
                <td>
                  {" "}
                  <span className="text-primary">25 - June - 2019</span>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-fifth"></div>
      </div>

      <Footer />
    </main>
  );
};

export default Product;
