import React from "react";
import Footer from "./Footer";
import product from "../../svg/product.svg";

const Main = props => {
  return (
    <main className={props.open ? "main-open" : ""}>
      <div className="top-page">
        <div className="left-top">
          <img src={product} alt="" />
          <span className="text-secondary text-large">Production house</span>
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
            <i class="fas fa-search"></i>
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
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Order #</th>
                <th>Item #</th>
                <th>Details</th>
                <th> Color</th>
                <th>Qty</th>
                <th>Print Type</th>
                <th>Delivery Method</th>
                <th>Delivery Time</th>
                <th>Production Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>#2345677899JB</td>
                <td>#2345677899JB</td>
                <td></td>
                <td>Royal</td>
                <td>L X 4 </td>
                <td>DTG Print</td>
                <td>Rush Shipping</td>
                <td>
                  <span>23 - June - 2019</span>{" "}
                  <span> Time Left: 10:00:00</span>{" "}
                </td>
                <td>Running 2 of 5 </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>#2345677899JB</td>
                <td>#2345677899JB</td>
                <td></td>
                <td>Royal</td>
                <td>L X 4 </td>
                <td>DTG Print</td>
                <td>Rush Shipping</td>
                <td>
                  <span>23 - June - 2019</span>{" "}
                  <span> Time Left: 10:00:00</span>{" "}
                </td>
                <td>Running 2 of 5 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
