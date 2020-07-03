import React from 'react'
import NoBeer from './NoBeer'
import BeerCard from "./BeerCard"
import PropTypes from "prop-types"

export default function BeerList(props) {
  const { beerList } = props
  return (
    <div>
      {beerList.length > 0 ? beerList.map(beer => (<BeerCard beer={beer} />)) : <NoBeer />}
    </div>
  )
}
BeerList.propTypes = {
  beerList: PropTypes.array
};