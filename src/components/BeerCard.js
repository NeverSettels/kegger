import React from 'react'


export default function BeerCard(props) {
  const { beer } = props
  return (
    <div className="beer-card" key={beer.id}>
      <img src={beer.img} alt={beer.name} />
      <h3>Name:{beer.name}</h3>
      <h4>Brand:{beer.brand}</h4>
      <a href="/">View Details</a>
    </div>
  )
}
