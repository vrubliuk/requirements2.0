import React from "react";
import "./Table.css";
import TableRow from "../TableRow/TableRow.jsx";

const Table = ({ table, data, columns }) => {
  const rowsBody = data.map(row => <TableRow table={table} key={row.key} row={row} columns={columns} />);
  return (
    <table className="Table">
      <thead>
        <TableRow row="heading" columns={columns} />
      </thead>
      <tbody>{rowsBody}</tbody>
    </table>
  );
};

export default Table;
