import React, { Component } from "react";
import Papa from "papaparse";
import { Table } from "antd";

const data = require("./data.csv");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Papa.parse(data, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.handleUpdate
    });
  }

  handleUpdate = result => {
    this.setState({ data: result.data });
  };

  render() {
    return <div>Welcome to the Application</div>;
  }
}

export default App;
