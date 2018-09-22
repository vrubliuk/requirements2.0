import React from "react";
import "./TableRow.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import RS from "../buttons/RS/RS.jsx";

const TableRow = ({ table, row, columns, location, token, showInModal }) => {
  let rowColumns;

  if (row === "heading") {
    rowColumns = columns.map((column, i) => (
      <th style={{ ...column.style, fontSize: "1.1rem" }} key={i}>
        {column.name}
      </th>
    ));
  } else {
    rowColumns = columns.map((column, i) => {
      let rs = null;
      if (table === "requirements" && column.name === "documentation" && (row.releaseSheetLink || row.releaseSheetAE)) {
        rs = <RS id={row.key} />;
      }

      return (
        <td className={`TableRow__${column.name}`} style={column.style} key={i}>
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
  }

  const options = {
    "/": {
      popup: "EditRequirementsRow",
      class: "requirements"
    },
    "/offices": {
      popup: "EditOfficesRow",
      class: "offices"
    },
    "/rail-loads": {
      popup: "EditRailLoadsRow",
      class: "railLoads"
    }
  };

  const additionalClass = row !== "heading" ? `TableRow__${options[location.pathname].class}` : null;

  const handleDoubleClick = () => {
    showInModal(options[location.pathname].popup, {
      table,
      id: row.key,
      row
    });
  };

  return (
    <tr className={`TableRow ${additionalClass}`} onDoubleClick={row !== "heading" && token ? handleDoubleClick : null}>
      {rowColumns}
    </tr>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInModal: (component, data) => dispatch(actionCreators.showInModal(component, data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableRow)
);
