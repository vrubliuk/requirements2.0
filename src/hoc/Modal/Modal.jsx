import React from "react";
import "./Modal.css";
import { connect } from "react-redux";
import Close from "../../components/buttons/Close/Close.jsx"
import Auth from "../../components/popups/Auth/Auth.jsx"

const Modal = ({modal}) => {

  const popups = {
    auth: <Auth/>
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
