import React, { Component } from 'react'
import Header from "./Header"
import BeerList from './BeerList'

export default class BreweryControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formModalVisible: false,
      detailsVisible: false,
      masterKegList: [],
    };
  }

  showModal = () => {
    this.setState({
      formModalVisible: true,
    });
  };

  showDetailModal = () => {
    this.setState({
      detailsVisible: true,
    });
  };


  handleSubmit = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formModalVisible: false
    });
  };


  handleCancel = e => {
    this.setState({
      formModalVisible: false,
    });
  };
  handleDetailClose = e => {
    this.setState({
      detailsVisible: false,
    });
  };


  render() {
    return (
      <>
        <Header handleCancel={this.handleCancel} handleOk={this.handleSubmit} showModal={this.showModal} visible={this.state.formModalVisible} />
        <div className="main-body">
          <BeerList beerList={this.state.masterKegList} visible={this.state.detailsVisible} handleCancel={this.handleDetailClose} showModal={this.showDetailModal} />
        </div>
      </>
    )
  }
}
