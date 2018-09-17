import React from "react";
import "./Offices.css";
import Table from "../../components/Table/Table.jsx";
import { connect } from "react-redux";

const Offices = ({ offices }) => {
  const columns = [
    {
      name: "office",
      style: {
        width: "25%"
      }
    },
    {
      name: "abbreviation",
      style: {
        width: "25%",
        textTransform: "uppercase"
      }
    },
    {
      name: "leader",
      style: {
        width: "25%"
      }
    },
    {
      name: "GSM",
      style: {
        width: "25%"
      }
    }
  ];

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

  let sortedOffices, content;

  if (Object.keys(offices).length) {
    const transformedToArray = transformToArray(offices);
    const sorted = sortAlphabetically(transformedToArray);
    const transformedToObject = transformToObject(sorted);
    sortedOffices = transformedToObject;
    content = (
      <div className="Offices">
        <div className="Offices__inner">
          <Table table="offices" data={sortedOffices} columns={columns} />
        </div>
      </div>
    );
  } else {
    content = null;
  }

  return content;
};

const mapStateToProps = state => {
  return {
    offices: state.data.offices
  };
};

export default connect(mapStateToProps)(Offices);
