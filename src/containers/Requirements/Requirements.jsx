import React, { Fragment } from "react";
import "./Requirements.css";
import Table from "../../components/Table/Table.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import ManipulatorDOM from "../../auxiliary/ManipulatorDOM/ManipulatorDOM.jsx";
import { connect } from "react-redux";

const Requirements = ({ requirements }) => {
  const columns = [
    {
      name: "customer",
      style: {
        width: "30%",
        textTransform: "uppercase"
      }
    },
    {
      name: "documentation",
      style: {
        width: "70%",
        fontSize: "0.9rem"
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

  const transformedToArray = transformToArray(requirements);
  const sortedData = sortAlphabetically(transformedToArray);

  return (
    <div className="Requirements">
      <div className="Requirements__inner">
        <div className="Requirements__cover" />
        {sortedData.length ? (
          <Fragment>
            <Filter />
            <Table table="requirements" data={sortedData} columns={columns} />
            <div className="Requirements__error" id="lol">
              Nothing has been found
            </div>
            <ManipulatorDOM />
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    requirements: state.data.requirements
  };
};

export default connect(mapStateToProps)(Requirements);
