import React, { Component } from 'react'
import Header from "./Header"

export default class BreweryControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formModalVisible: false,
      masterKegList: [],
    };
  }

  showModal = () => {
    this.setState({
      formModalVisible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      formModalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      formModalVisible: false,
    });
  };

  render() {
    return (
      <div>
        <Header handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} this={this.handleCancel} visible={this.state.formModalVisible} />
      </div>
    )
  }
}
