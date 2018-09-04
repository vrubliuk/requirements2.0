import React, { Fragment } from "react";
import "./FilteredRequirementsTable.css";
import Table from "../Table/Table.jsx";
import { connect } from "react-redux";

const FilteredRequirementsTable = ({ table, data, columns, filter }) => {
  const transformToArray = data => {
    return Object.keys(data).map(key => {
      let values = {};
      Object.keys(data[key]).forEach(value => {
        values[value] = data[key][value];
      });
      return { key, ...values };
    });
  };

  const sortAlphabetically = data => {
    return data.sort((a, b) => {
      const x = a.customer.toLowerCase();
      const y = b.customer.toLowerCase();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
  };

  const filteredByWord = data => {
    return data.filter(item => item[filter.by].toLowerCase().includes(filter.value));
  };

  const filteredByLetter = data => {
    return data.filter(item => {
      const itemValue = item[filter.by].slice(0, 1).toLowerCase();
      return filter.value !== "0-9" ? itemValue.includes(filter.value) : /[0-9]/.test(itemValue);
    });
  };

  const transformToObject = data => {
    let obj = {};
    data.forEach(item => {
      obj[item.key] = {};
      Object.keys(item).forEach(value => {
        if (value !== "key") obj[item.key][value] = item[value];
      });
    });
    return obj;
  };

  let updatedData = { ...data };
  if (data) {
    const transformedToArray = transformToArray(data);
    const sorted = sortAlphabetically(transformedToArray);
    let filtered = null;
    !filter && (filtered = sorted);
    filter && filter.type === "word" && (filtered = filteredByWord(sorted));
    filter && filter.type === "letter" && (filtered = filteredByLetter(sorted));
    const transformedToObject = transformToObject(filtered);
    updatedData = transformedToObject;
  }

  return (
    <Fragment>
      {Object.keys(updatedData).length ? <Table table={table} data={updatedData} columns={columns} /> : null}
      {Object.keys(updatedData).length ? null : <div className="FilteredRequirementsTable__error">Nothing has been found</div>}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.temp.filter
  };
};

export default connect(mapStateToProps)(FilteredRequirementsTable);
