import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';

function GithubUser() {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] =useState(null);
  const { username } = useParams();

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchGithubUser(username)
    
  },[username])
  console.log(username);
  console.log("hola");

  return (
    <div>
      {data && (
				<>
					<img width={50} src={data.avatar_url} />
					<div>{data.login}</div>
					<div>{data.name}</div>
				</>
			)}
      {error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
    </div>
  )
}

export default GithubUser
