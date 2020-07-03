import React from 'react'
import { Empty } from 'antd';

export default function NoBeer() {
  return (
    <Empty
      image="sad.png"
      description={
        <h2>No beer yet! </h2>
      }
    >
    </Empty>
  )
}
