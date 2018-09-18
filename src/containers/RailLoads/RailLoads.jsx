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

  const transformToArray = data => {
    return Object.keys(data).map(key => {
      let values = {};
      Object.keys(data[key]).forEach(value => {
        values[value] = data[key][value];
      });
      return { key, ...values };
    });
  };

  let content1, content2;

  if (Object.keys(railLoads1).length) {
    const transformedRailLoads1 = transformToArray(railLoads1);
    content1 = <Table table="railLoads1" data={transformedRailLoads1} columns={columns1} />;
  }
  if (Object.keys(railLoads2).length) {
    const transformedRailLoads2 = transformToArray(railLoads2);
    content2 = <Table table="railLoads2" data={transformedRailLoads2} columns={columns2} />;
  }

  return (
    <div className="RailLoads">
      <div className="RailLoads__inner">
        {content1}
        {content2}
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
