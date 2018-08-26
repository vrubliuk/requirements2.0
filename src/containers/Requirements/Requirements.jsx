import React from "react";
import "./Requirements.css";
import Table from "../../components/Table/Table.jsx";
import { connect } from "react-redux";

const Requirements = ({ requirements }) => {
  const columns = [
    {
      name: "сustomer",
      style: {
        width: "30%",
        textTransform: "uppercase"
      }
    },
    {
      name: "documentation",
      style: {
        width: "70%"
      }
    }
  ];

  return (
    <div className="Requirements">
      <div className="Requirements__inner">
        <Table table="requirements" data={requirements} columns={columns} />
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
