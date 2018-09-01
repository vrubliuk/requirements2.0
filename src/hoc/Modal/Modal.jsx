import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import Close from "../../components/buttons/Close/Close.jsx"
import Auth from "../../components/popups/Auth/Auth.jsx"
import AddRequirementsRow from "../../components/popups/AddRequirementsRow/AddRequirementsRow.jsx"
import AddOfficesRow from "../../components/popups/AddOfficesRow/AddOfficesRow.jsx"
import AddRailLoadsRow from "../../components/popups/AddRailLoadsRow/AddRailLoadsRow.jsx"
import RSInfo from "../../components/popups/RSInfo/RSInfo.jsx"
import EditRequirementsRow from "../../components/popups/EditRequirementsRow/EditRequirementsRow.jsx"
import EditOfficesRow from "../../components/popups/EditOfficesRow/EditOfficesRow.jsx"
import EditRailLoadsRow from "../../components/popups/EditRailLoadsRow/EditRailLoadsRow.jsx"

const Modal = ({modal}) => {
  const popups = {
    Auth: <Auth/>,
    AddRequirementsRow: <AddRequirementsRow/>,
    AddOfficesRow: <AddOfficesRow/>,
    AddRailLoadsRow: <AddRailLoadsRow/>,
    RSInfo: <RSInfo data={modal.data}/>,
    EditRequirementsRow: <EditRequirementsRow data={modal.data}/>,
    EditOfficesRow: <EditOfficesRow data={modal.data}/>,
    EditRailLoadsRow: <EditRailLoadsRow data={modal.data}/>
  }

  return (
    <div className="Modal">
      <div className="Modal__inner">
      {popups[modal.component]}
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
