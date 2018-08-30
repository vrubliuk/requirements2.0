import React from "react";
import "./TableRow.css";
import colors from "../../assets/colors";
import { withRouter } from "react-router-dom";
import Radium from "radium";
import RS from "../buttons/RS/RS.jsx";

const TableRow = ({ table, id, row, columns, location }) => {
  let rowColumns;
  let style = null;

  if (row === "heading") {
    rowColumns = columns.map((column, i) => (
      <th className="TableRow" style={column.style} key={i}>
        {column.name}
      </th>
    ));
  } else {
    rowColumns = columns.map((column, i) => {
      let rs = null;
      if (table === "requirements" && column.name === "documentation" && (row.releaseSheetLink || row.releaseSheetAE)) {
        rs = <RS id={id} />;
      }

      return (
        <td style={column.style} key={i}>
          <div>
            <span>
              {
                row[
                  column.name
                    .split(" ")
                    .map((word, i) => (i > 0 ? word.slice(0, 1).toUpperCase() + word.slice(1) : word))
                    .join("")
                ]
              }
            </span>
            {rs}
          </div>
        </td>
      );
    });
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
