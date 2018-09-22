import { Component } from "react";
import { connect } from "react-redux";

class ManipulatorDOM extends Component {
  toggleRequirementsRows = () => {
    const filter = this.props.filter;
    const tableHeader = document.getElementsByClassName("TableRow")[0];
    const requirementsError = document.getElementsByClassName("Requirements__error")[0];
    if (filter) {
      let visibleRows = 0;
      const rows = document.getElementsByClassName(`TableRow__${filter.by}`);
      if (filter.type === "word") {
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].children[0].children[0].innerText.toLowerCase().indexOf(filter.value) > -1) {
            rows[i].parentElement.style.display = "";
            rows[i].parentElement.style.backgroundColor = visibleRows % 2 ? "#f1f1f1" : "white";
            visibleRows++;
          } else {
            rows[i].parentElement.style.display = "none";
          }
        }
      } else if (filter.type === "letter") {
        for (let i = 0; i < rows.length; i++) {
          const firstLetter = rows[i].children[0].children[0].innerText.slice(0, 1).toLowerCase();
          if (filter.value !== "0-9") {
            if (firstLetter.indexOf(filter.value) > -1) {
              rows[i].parentElement.style.display = "";
              rows[i].parentElement.style.backgroundColor = visibleRows % 2 ? "#f1f1f1" : "white";
              visibleRows++;
            } else {
              rows[i].parentElement.style.display = "none";
            }
          } else {
            if (/[0-9]/.test(firstLetter)) {
              rows[i].parentElement.style.display = "";
              rows[i].parentElement.style.backgroundColor = visibleRows % 2 ? "#f1f1f1" : "white";
              visibleRows++;
            } else {
              rows[i].parentElement.style.display = "none";
            }
          }
        }
      }
      tableHeader.style.display = visibleRows ? "" : "none";
      requirementsError.style.display = visibleRows ? "" : "block";
    } else {
      tableHeader && (tableHeader.style.display = "");
      const rows = document.getElementsByClassName("TableRow");
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
        rows[i].style.backgroundColor = "";
      }
      requirementsError && (requirementsError.style.display = "");
    }
  };

  componentDidMount() {
    this.toggleRequirementsRows();
  }

  componentDidUpdate() {
    this.toggleRequirementsRows();
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    requirements: state.data.requirements,
    filter: state.temp.filter
  };
};

export default connect(mapStateToProps)(ManipulatorDOM);
