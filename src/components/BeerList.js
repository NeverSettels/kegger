import React from 'react'
import NoBeer from './NoBeer'
import BeerCard from "./BeerCard"
import PropTypes from "prop-types"

export default function BeerList(props) {
  const { beerList, handleCancel, showModal, visible, servePint } = props
  return (
    <div>
      {beerList.length > 0 ? beerList.map(beer => (<BeerCard servePint={servePint} beer={beer} key={beer.id} visible={visible} handleCancel={handleCancel} showModal={showModal} />)) : <NoBeer />}
    </div>
  )
}
BeerList.propTypes = {
  beerList: PropTypes.array
};