import React from 'react'
import { Modal, Button } from 'antd';

export default function Header(props) {
  const { handleOk, handleCancel, showModal, visible } = props
  return (
    <nav>
      <img src="/wine.png" alt="keg logo" />
      <Button type="primary" onClick={showModal}>
        Add keg
        </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </nav>
  )
}
