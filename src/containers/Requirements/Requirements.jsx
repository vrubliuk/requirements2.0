import React, { Component, Fragment } from "react";
import "./Requirements.css";
import FilteredRequirementsTable from "../../components/FilteredRequirementsTable/FilteredRequirementsTable.jsx";
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
      width: "70%",
      fontSize: "0.9rem"
    }
  }
];

class Requirements extends Component {
  state = {
    filterWidth: null,
    filterTop: null,
    sortedData: []
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

  transformToArray = data => {
    return Object.keys(data).map(key => {
      let values = {};
      Object.keys(data[key]).forEach(value => {
        values[value] = data[key][value];
      });
      return { key, ...values };
    });
  };

  sortAlphabetically = data => {
    return data.sort((a, b) => {
      const x = a.customer.toLowerCase();
      const y = b.customer.toLowerCase();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
  };

  setSortedData() {
    const transformedToArray = this.transformToArray(this.props.requirements);
    this.setState({
      sortedData: this.sortAlphabetically(transformedToArray)
    });
  }

  componentDidMount() {
    this.setWidth();
    this.setTop();
    this.setSortedData();
    window.addEventListener("resize", this.setWidth);
    window.addEventListener("scroll", this.setTop);
  }

  componentDidUpdate(prevProps) {
    if (this.props.requirements !== prevProps.requirements) {
      this.setSortedData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWidth);
    window.removeEventListener("scroll", this.setTop);
  }

  render() {
    return (
      <div className="Requirements">
        <div className="Requirements__inner" ref={this.innerContainer}>
          <div className="Requirements__cover" style={{ width: this.state.filterWidth }} />
          {Object.keys(this.props.requirements).length ? (
            <Fragment>
              <Filter width={this.state.filterWidth} top={this.state.filterTop} />
              <FilteredRequirementsTable table="requirements" sortedData={this.state.sortedData} columns={columns} />
            </Fragment>
          ) : null}
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
