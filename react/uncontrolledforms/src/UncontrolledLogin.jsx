import React from 'react'
import Login from './Login'

function UncontrolledLogin() {

  function handleSubmit(event) {
    event.preventDefault();

    // const user = event.target.elements.namedItem("username").value;
    // const password = event.target.elements.namedItem("password").value;
    // const checked = event.target.elements.namedItem("checkbox").checked;
    // const data = {
    //   user,
    //   password,
    //   checked
    // }
    

    const formData = new FormData(event.target);
    const data = {
      username : formData.get("username"),
      password : formData.get("password"),
      checked : formData.get("username") == "on" ? true : false
    }
    console.log(data);

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='username' />
      <input name='password' type='password' />
      <input name='checkbox' type="checkbox" />
      <Login />
    </form>
  )
}

export default UncontrolledLogin
