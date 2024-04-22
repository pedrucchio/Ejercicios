import React, { useState } from 'react'
import Welcome from './Welcome'
import Login from './Login';

function InteractiveWelcome() {
  const [welcomeName,setWelcomeName] = useState({
    user : "",
    password : "",
    remember : false
  });

  function handleNameChange(event) {
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    const value = event.target.value;
    setWelcomeName((data) => {
      return{
        ...data,
        [name] : type === 'checkbox' ? checked : value
      }
    })
  }

  function handleClick(event) {
    event.preventDeafult();
    console.log(welcomeName.user);
    console.log(welcomeName.password);
    console.log(welcomeName.remember);
  }

  function handleReset() {
    setWelcomeName({
      user: "",
      password: "",
      remember: false
    })
  }

 

  

  return (
    <div>
      <form action="submit" onSubmit={handleClick}>
        <input type="text"  name='user' value={ welcomeName.user } onChange={handleNameChange} />
        <input type="password"  name='password' value={ welcomeName.password } onChange={handleNameChange} />
        <input type="checkbox" checked={welcomeName.remember} name="remember" value={ welcomeName.remember } onChange={handleNameChange}/>
        <Login user={ welcomeName.user } password={ welcomeName.password } handleClick={handleClick} handleReset={handleReset}/>
        <Welcome name ={ welcomeName.user }/>
      </form>
    </div>
  )
}

export default InteractiveWelcome
