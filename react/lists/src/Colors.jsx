import React from 'react'
import Color from './Color'

function Colors({ arrayColor }) {
  return (
    <ul>
        <Color color={arrayColor}/>
    </ul>
  )
}

export default Colors
