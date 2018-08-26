import React from "react";
import "./Table.css"
import {connect} from "react-redux"
import TableRow from "../TableRow/TableRow.jsx"

const Table = ({table, data, columns }) => {
  

  const rowsBody = Object.keys(data).map(key => <TableRow table={table} key={key} row={data[key]} columns={columns}/>)
  return <table className="Table">
    <TableRow row="heading" columns={columns}/>
    {rowsBody}
  </table>  
}


const mapStateToProps = state => {
  return {
  
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

