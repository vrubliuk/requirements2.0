import React from "react";
import Table from "../Table/Table.jsx";

const SortedOfficesTable = ({ table, data, columns }) => {
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
      const x = a.office.toLowerCase();
      const y = b.office.toLowerCase();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
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
    const transformedToObject = transformToObject(sorted);
    updatedData = transformedToObject;
  }

  return Object.keys(updatedData).length ? <Table table={table} data={updatedData} columns={columns} /> : null;
};

export default SortedOfficesTable;
