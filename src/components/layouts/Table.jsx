import React from "react";

const Table = ({ handleClick }) => {
  return (
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
        <tr onClick={handleClick}>
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
            <span>23 - June - 2019</span> <span> Time Left: 10:00:00</span>{" "}
          </td>
          <td>Running 2 of 5 </td>
        </tr>
        <tr onClick={handleClick}>
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
            <span>23 - June - 2019</span> <span> Time Left: 10:00:00</span>{" "}
          </td>
          <td>Running 2 of 5 </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
