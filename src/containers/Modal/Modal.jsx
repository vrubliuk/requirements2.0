import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import Close from "../../components/buttons/Close/Close.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Auth from "../../components/popups/Auth/Auth.jsx";
import AddRequirementsRow from "../../components/popups/AddRequirementsRow/AddRequirementsRow.jsx";
import AddOfficesRow from "../../components/popups/AddOfficesRow/AddOfficesRow.jsx";
import AddRailLoadsRow from "../../components/popups/AddRailLoadsRow/AddRailLoadsRow.jsx";
import RSInfo from "../../components/popups/RSInfo/RSInfo.jsx";
import EditRequirementsRow from "../../components/popups/EditRequirementsRow/EditRequirementsRow.jsx";
import EditOfficesRow from "../../components/popups/EditOfficesRow/EditOfficesRow.jsx";
import EditRailLoadsRow from "../../components/popups/EditRailLoadsRow/EditRailLoadsRow.jsx";

const Modal = ({ modal, loader }) => {
  const popups = () => {
    return {
      Auth: <Auth />,
      AddRequirementsRow: <AddRequirementsRow table="requirements" />,
      AddAgentRequirementsRow: <AddRequirementsRow table="agentRequirements" />,
      AddOfficesRow: <AddOfficesRow />,
      AddRailLoadsRow: <AddRailLoadsRow />,
      RSInfo: <RSInfo table="requirements" data={modal.data} />,
      AgentRSInfo: <RSInfo table="agentRequirements" data={modal.data} />,
      EditRequirementsRow: <EditRequirementsRow table="requirements" data={modal.data} />,
      EditAgentRequirementsRow: <EditRequirementsRow table="agentRequirements" data={modal.data} />,
      EditOfficesRow: <EditOfficesRow data={modal.data} />,
      EditRailLoadsRow: <EditRailLoadsRow data={modal.data} />,
    };
  };

  return modal ? (
    <div className="Modal">
      <div className="Modal__inner">
        {popups()[modal.component]}
        <Close />
        {loader && <Loader />}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    modal: state.temp.modal,
    loader: state.temp.loader,
  };
};

export default connect(mapStateToProps)(Modal);
