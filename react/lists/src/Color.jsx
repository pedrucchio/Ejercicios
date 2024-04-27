import React from 'react'

function Color({ color }) {
  return (
    <div>{color.map((item => {
         return <li key={item.id}>{item.name}</li>
    }))}</div>
  )
}

export default Color
