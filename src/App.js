import React, { Component } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";
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
    localStorage.setItem("games-csv", JSON.stringify(result.data));
    this.setState({ data: result.data });
  };

  getColumns = () => {
    return [
      {
        title: "Rank",
        dataIndex: "Rank",
        key: "Rank"
      },
      {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
        // sorter: (a, b) => {
        //   return a.Name.length - b.Name.length;
        // },
        // sortDirections: ["ascend", "descend"]
        render: (text, record, index) => (
          <Link to={`/${record.Rank}`}>{text}</Link>
        )
      },
      {
        title: "Platform",
        dataIndex: "Platform",
        key: "Platform"
      },
      {
        title: "Year",
        dataIndex: "Year",
        key: "Year",
        sorter: (a, b) => {
          return a.Year - b.Year;
        },
        sortDirections: ["ascend", "descend"]
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
        <Table dataSource={this.state.data} columns={this.getColumns()} />
      </>
    );
  }
}

export default App;
