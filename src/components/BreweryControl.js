import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'

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

  handleOk = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formModalVisible: false
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
      <>
        <Header handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} this={this.handleCancel} visible={this.state.formModalVisible} />
        <div>

          <BeerList beerList={this.state.masterKegList} />
        </div>
      </>
    )
  }
}
