import React from 'react'
import Login from './Login';
import { useControlled } from './useControlled';

function InteractiveWelcome() {
  const { user,password,onNameChange,onHandleClick,onReset} = useControlled()
  
  return (
    <div>
      <form onSubmit={onHandleClick}>
        <input type="text"  name='user' value={ user } onChange={onNameChange} />
        <input type="password"  name='password' value={ password } onChange={onNameChange} />
        <Login user={ user } password={ password } handleReset={onReset}/>
      </form>
    </div>
  )
}

export default InteractiveWelcome
