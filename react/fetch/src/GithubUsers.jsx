import React from 'react'
import { useState } from 'react';
import GithubUser from "./GithubUser"

function GithubUsers() {
  const [search,setSearch] = useState('');
  const [username,setUsername] = useState([]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  async function handleForm(event) {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      if (response.ok) {
        const userData = await response.json();
        setUsername(prevUsers => [...prevUsers, userData]);
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={handleSearch} name='username' type="text" placeholder='Introduce tu usuario github' />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {username.map((user, index) => (
          <li key={index}>
            <GithubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
