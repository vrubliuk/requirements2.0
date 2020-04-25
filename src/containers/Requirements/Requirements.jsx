import React, { Fragment } from "react";
import "./Requirements.css";
import FilteredRequirementsTable from "../../components/FilteredRequirementsTable/FilteredRequirementsTable.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import { connect } from "react-redux";

const Requirements = ({ table, requirements, agentRequirements }) => {
  const columns = [
    {
      name: "customer",
      style: {
        width: "30%",
        textTransform: "uppercase",
      },
    },
    {
      name: "documentation",
      style: {
        width: "70%",
        fontSize: "0.9rem",
      },
    },
  ];

  const transformToArray = (data) => {
    return Object.keys(data).map((key) => {
      let values = {};
      Object.keys(data[key]).forEach((value) => {
        values[value] = data[key][value];
      });
      return { key, ...values };
    });
  };

  const sortAlphabetically = (data) => {
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

  const transformedToArray = transformToArray(table === "requirements" ? requirements : agentRequirements);
  const sortedData = sortAlphabetically(transformedToArray);

  return (
    <div className="Requirements">
      <div className="Requirements__inner">
        <div className="Requirements__cover" />
        <Fragment>
          <Filter />
          <FilteredRequirementsTable table={table} sortedData={sortedData} columns={columns} />
        </Fragment>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    requirements: state.data.requirements,
    agentRequirements: state.data.agentRequirements,
  };
};

export default connect(mapStateToProps)(Requirements);
