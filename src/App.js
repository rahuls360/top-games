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
    console.log(result);
    this.setState({ data: result.data });
  };

  getColumns = () => {
    return [
      {
        title: "Rank",
        dataIndex: "Rank",
        key: "rank"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Platform",
        dataIndex: "Platform",
        key: "Platform"
      },
      {
        title: "Year",
        dataIndex: "Year",
        key: "Year"
      },
      {
        title: "Genre",
        dataIndex: "Genre",
        key: "Genre"
      },
      {
        title: "Publisher",
        dataIndex: "Publisher",
        key: "Publisher"
      },
      {
        title: "Global_Sales",
        dataIndex: "Global_Sales",
        key: "Global_Sales"
      }
    ];
  };

  render() {
    return (
      <>
        <div>Welcome to the Application</div>

        <Table dataSource={this.state.data} columns={this.getColumns()} />
      </>
    );
  }
}

export default App;
