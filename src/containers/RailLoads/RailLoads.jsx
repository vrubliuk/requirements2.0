import React from "react";
import "./RailLoads.css";
import Table from "../../components/Table/Table.jsx";
import { connect } from "react-redux";

const RailLoads = ({ railLoads1, railLoads2 }) => {
  const columns1 = [
    {
      name: "SCAC",
      style: {
        width: "50%",
        textTransform: "uppercase"
      }
    },
    {
      name: "carrier",
      style: {
        width: "50%"
      }
    }
  ];
  const columns2 = [
    {
      name: "equipment type",
      style: {
        width: "50%"
      }
    },
    {
      name: "abbreviation",
      style: {
        width: "50%",
        textTransform: "uppercase"
      }
    }
  ];

  return (
    <div className="RailLoads">
      <div className="RailLoads__inner">
        {Object.keys(railLoads1).length ? <Table table="railLoads1" data={railLoads1} columns={columns1} /> : null}
        {Object.keys(railLoads2).length ? <Table table="railLoads2" data={railLoads2} columns={columns2} /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    railLoads1: state.data.railLoads1,
    railLoads2: state.data.railLoads2
  };
};

export default connect(mapStateToProps)(RailLoads);
