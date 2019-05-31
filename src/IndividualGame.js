import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;

class IndividualGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const data = JSON.parse(localStorage.getItem("games-csv"));
    console.log(data);
    data.forEach(item => {
      if (item.Rank === this.props.match.params.id) {
        this.setState({ item: item });
      }
    });
  }

  render() {
    const { item } = this.state;
    return (
      <>
        <Row>
          <Col span={12} offset={6}>
            <Title level={2}>
              <strong>Rank:</strong> <span>{item.Rank}</span>
            </Title>
            <Title level={2}>
              <strong>Name:</strong> <span>{item.Name}</span>
            </Title>
            <Title level={2}>
              <strong>Platform:</strong> <span>{item.Platform}</span>
            </Title>
            <Title level={2}>
              <strong>Year:</strong> <span>{item.Year}</span>
            </Title>
            <Title level={2}>
              <strong>Genre:</strong> <span>{item.Genre}</span>
            </Title>
            <Title level={2}>
              <strong>Publisher:</strong> <span>{item.Publisher}</span>
            </Title>
            <Title level={2}>
              <strong>Global_Sales:</strong> <span>{item.Global_Sales}</span>
            </Title>
          </Col>
        </Row>
      </>
    );
  }
}

export default IndividualGame;
