import React from 'react'
import { Modal, Button } from 'antd';


export default function BeerCard(props) {
  const { beer, visible, showModal, handleCancel } = props
  return (
    <div className="beer-card" >
      <img src={beer.img} alt={beer.name} />
      <h3>Name: {beer.name}</h3>
      <h4>Brand: {beer.brand}</h4>
      <Button type="primary" onClick={showModal}>
        Open Modal
        </Button>
      <Modal
        title={beer.name}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <img src={beer.img} alt={beer.name} />
        <h3><strong>Name: </strong>{beer.name}</h3>
        <h4><strong>Brand: </strong>{beer.brand}</h4>
        <p><strong>Description: </strong><br />
          {beer.desc}
        </p>
        <p><strong>Price:</strong> ${beer.price}</p>
        <p><strong>Alcohol Content:</strong> {beer.price}%</p>
        <p><strong>Pints left: </strong>{beer.pints > 0 ? beer.pints : "Oops we're out!"}</p>
      </Modal>
    </div>
  )
}
