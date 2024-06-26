import React from 'react'

function Login({ user,password,handleClick,handleReset}) {
  return (
    <div>
      <button type="submit" disabled={(!user || !password)}>Login</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Login
