import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import Close from "../../components/buttons/Close/Close.jsx"
import Auth from "../../components/popups/Auth/Auth.jsx"
import RequirementsRow from "../../components/popups/RequirementsRow/RequirementsRow.jsx"
import OfficesRow from "../../components/popups/OfficesRow/OfficesRow.jsx"
import RailLoadsRow from "../../components/popups/RailLoadsRow/RailLoadsRow.jsx"

const Modal = ({modal}) => {

  const popups = {
    Auth: <Auth/>,
    RequirementsRow: <RequirementsRow/>,
    OfficesRow: <OfficesRow/>,
    RailLoadsRow: <RailLoadsRow/>
  }

  return (
    <div className="Modal">
      <div className="Modal__inner">
      {popups[modal]}
      <Close />
      </div>
      
    </div>
  );
};


const mapStateToProps = state => {
  return {
    modal: state.temp.modal
  };
};

export default connect(mapStateToProps)(Modal);
