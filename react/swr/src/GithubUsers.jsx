import React from 'react'
import { useState } from 'react';
import GithubUser from './GithubUser';


function GithubUsers({}) {
  const [userInput, setUserInput] = useState(null)
  const [usuario, setUsuario] = useState(null)


    function handleInput(event) {
        setUserInput(event.target.value)
    }

    async function handleForm(event) {
        event.preventDefault();
        setUsuario(userInput)
      }

  return (
    <div>
        <form onSubmit={handleForm}>
            <input type="text" name='nombre' onChange={handleInput}/>
            <button>Submit</button>
        </form>
        <ul>
        <GithubUser username={usuario ? usuario : null} />
            {/* {usuario.map((user,index) => { */}
                 {/* (

                <li key={index}> 
                    <GithubUser username={user.login} />
                </li>
                ) */}
            {/* })} */}
        </ul>
    </div>
  )
}

export default GithubUsers
