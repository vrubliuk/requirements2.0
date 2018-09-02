import React from "react";
import "./Table.css";
import TableRow from "../TableRow/TableRow.jsx";

const Table = ({ table, data, columns }) => {
  const rowsBody = Object.keys(data).map(key => <TableRow table={table} key={key} id={key} row={data[key]} columns={columns} />);
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
