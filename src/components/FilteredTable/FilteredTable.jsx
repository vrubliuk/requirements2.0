import React from 'react';
import Table from '../Table/Table.jsx'
import {connect} from 'react-redux'

const FilteredTable = ({table, data, columns, filter}) => {
  // console.log(data);
  console.log("filter", filter);
  
  const transformToArray = (data) => {
    return Object.keys(data).map(key => {
      let values = {};
      Object.keys(data[key]).forEach(value => {
        values[value] = data[key][value];
      })
      return {key, ...values}
    });
  }

  const sortAlphabetically = (data) => {
    return data.sort((a, b)=> {
      const x = a.сustomer.toLowerCase()
      const y = b.сustomer.toLowerCase() 
      if (x > y) { 
        return 1; 
      } 
      if (x < y) { 
        return -1; 
      } 
      return 0;
    })
  }








  const transformToObject = (data) => {
    let obj = {}
    data.forEach(item => {
      obj[item.key] = {}
      Object.keys(item).forEach(value => {
        if(value !== "key") obj[item.key][value] = item[value]
      })
    })
    return obj;
  }


  let transformedToArray = transformToArray(data)
  console.log("transformedToArray", transformedToArray);
  let sorted = sortAlphabetically(transformedToArray);
  console.log("sorted", sorted);
  let transformedToObject = transformToObject(sorted);
  console.log("transformedToObject", transformedToObject);

  return <Table table={table} data={transformedToObject} columns={columns} />

}

const mapStateToProps = state => {
  return {
    filter: state.temp.filter
  };
};

export default connect(mapStateToProps)(FilteredTable);
