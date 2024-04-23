import React from 'react'
import { Counter } from './Counter'
import FocusableInput from './FocusableInput'

function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1}/>
      <FocusableInput />
    </div>
  )
}

export default App
