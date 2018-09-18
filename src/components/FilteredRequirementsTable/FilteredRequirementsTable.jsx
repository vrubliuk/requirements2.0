import React, { Fragment } from "react";
import "./FilteredRequirementsTable.css";
import Table from "../Table/Table.jsx";
import { connect } from "react-redux";

const FilteredRequirementsTable = ({ table, sortedData, columns, filter }) => {
  const filteredByWord = data => {
    return data.filter(item => item[filter.by].toLowerCase().includes(filter.value));
  };

  const filteredByLetter = data => {
    return data.filter(item => {
      const itemValue = item[filter.by].slice(0, 1).toLowerCase();
      return filter.value !== "0-9" ? itemValue.includes(filter.value) : /[0-9]/.test(itemValue);
    });
  };

  let filteredData = sortedData;
  filter && filter.type === "word" && (filteredData = filteredByWord(sortedData));
  filter && filter.type === "letter" && (filteredData = filteredByLetter(sortedData));

  return (
    <Fragment>
      {filteredData.length ? <Table table={table} data={filteredData} columns={columns} /> : null}
      {filteredData.length ? null : <div className="FilteredRequirementsTable__error">Nothing has been found</div>}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.temp.filter
  };
};

export default connect(mapStateToProps)(FilteredRequirementsTable);
