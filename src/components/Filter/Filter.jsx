import React, {Component} from "react"
import "./Filter.css"

class Filter extends Component {
  state = {
    letter: null,
    word: "",
    by: ["customer"],
    showByList: false
  }

  letters = ["0-9", 'a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', "k", "l", "m", "n", "o", "p", "q", "r", 's', "t", "u", "v", "w", "x", 'y', "z"];
  byList = ['customer', "documentation"]

 
  render() {
    return <div className="Filter">Filter</div>
  }

}

export default Filter;