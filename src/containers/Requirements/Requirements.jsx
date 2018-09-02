import React, { Component } from "react";
import "./Requirements.css";
import FilteredTable from "../../components/FilteredTable/FilteredTable.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import { connect } from "react-redux";

const columns = [
  {
    name: "customer",
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

class Requirements extends Component {
  state = {
    filterWidth: null,
    filterTop: null
  };

  innerContainer = React.createRef();

  setWidth = () => {
    this.setState({
      filterWidth: this.innerContainer.current.offsetWidth
    });
  };

  setTop = () => {
    this.setState({
      filterTop: document.documentElement.scrollTop > 25 ? 0 : 25
    });
  };

  componentDidMount() {
    this.setWidth();
    this.setTop();
    window.addEventListener("resize", this.setWidth);
    window.addEventListener("scroll", this.setTop);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWidth);
    window.removeEventListener("scroll", this.setTop);
  }

  render() {
    return (
      <div className="Requirements">
        <div className="Requirements__inner" ref={this.innerContainer}>
          <div className="cover" style={{ width: this.state.filterWidth }} />
          <Filter width={this.state.filterWidth} top={this.state.filterTop} />
          <FilteredTable table="requirements" data={this.props.requirements} columns={columns} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    requirements: state.data.requirements
  };
};

export default connect(mapStateToProps)(Requirements);
