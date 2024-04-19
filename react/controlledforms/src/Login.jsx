import React from 'react'

function Login({ user,password,handleClick}) {
  return <button disabled={(!user || !password)} onClick={handleClick}>Login</button>
}

export default Login
