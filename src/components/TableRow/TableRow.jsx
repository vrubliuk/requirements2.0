import React from "react";
import "./TableRow.css";
import colors from "../../assets/colors";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import Radium from "radium";
import RS from "../buttons/RS/RS.jsx";

const TableRow = ({ table, row, columns, location, token, showInModal }) => {
  let rowColumns;
  let style = null;

  if (row === "heading") {
    rowColumns = columns.map((column, i) => (
      <th style={{ ...column.style, fontSize: "1.1rem" }} key={i}>
        {column.name}
      </th>
    ));
  } else {
    rowColumns = columns.map((column, i) => {
      let rs = null;
      if ((table === "requirements" || table === "agentRequirements") && column.name === "documentation" && (row.releaseSheetLink || row.releaseSheetAE)) {
        rs = <RS table={table} id={row.key} />;
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
        background: colors[location.pathname].light,
      },
    };
  }

  const popups = {
    "/": "EditRequirementsRow",
    "/agent": "EditAgentRequirementsRow",
    "/offices": "EditOfficesRow",
    "/rail-loads": "EditRailLoadsRow",
  };

  const handleDoubleClick = () => {
    showInModal(popups[location.pathname], {
      table,
      id: row.key,
      row,
    });
  };

  return (
    <tr className="TableRow" style={style} onDoubleClick={row !== "heading" && token ? handleDoubleClick : null}>
      {rowColumns}
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showInModal: (component, data) => dispatch(actionCreators.showInModal(component, data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(TableRow)));
