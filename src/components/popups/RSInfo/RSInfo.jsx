import React, { Fragment } from "react";
import "./RSInfo.css";
import { connect } from "react-redux";

const RSInfo = ({ table, requirements, agentRequirements, data }) => {
  const row = (table === "requirements" ? requirements : agentRequirements)[data];

  return (
    <div className="RSInfo">
      <div className="Modal__title">Release sheet information</div>
      <form className="Modal__form">
        {row.releaseSheetLink && (
          <Fragment>
            <div className="Modal__label">Shared drive link</div>
            <input className="Modal__input" type="text" value={row.releaseSheetLink} readOnly />
          </Fragment>
        )}
        {row.releaseSheetAE && (
          <Fragment>
            <div className="Modal__label">Responsible AE</div>
            <input className="Modal__input" type="text" value={row.releaseSheetAE} readOnly />
          </Fragment>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    requirements: state.data.requirements,
    agentRequirements: state.data.agentRequirements,
  };
};

export default connect(mapStateToProps)(RSInfo);
