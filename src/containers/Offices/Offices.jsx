import React from "react";
import "./Offices.css";
import SortedOfficesTable from "../../components/SortedOfficesTable/SortedOfficesTable.jsx"
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

  return (
    <div className="Offices">
      <div className="Offices__inner">{Object.keys(offices).length ? <SortedOfficesTable table="offices" data={offices} columns={columns} /> : null}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    offices: state.data.offices
  };
};

export default connect(mapStateToProps)(Offices);
