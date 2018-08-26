import React from "react";
import "./TableRow.css";
import colors from "../../assets/colors";
import { withRouter } from "react-router-dom";
import Radium from "radium";

const TableRow = ({ table, key, row, columns, location }) => {
  let rowColumns;
  let style = null;
  if (row === "heading") {
    rowColumns = columns.map((column, i) => (
      <th className="TableRow" style={column.style} key={i}>
        {column.name}
      </th>
    ));
  } else {
    rowColumns = columns.map((column, i) => (
      <td className="TableRow" style={column.style} key={i}>
        {row[column.name]}
      </td>
    ));
    style = {
      ":hover": {
        background: colors[location.pathname].light
      }
    };
  }

  return (
    <tr className="TableRow" style={style}>
      {rowColumns}
    </tr>
  );
};

export default withRouter(Radium(TableRow));
