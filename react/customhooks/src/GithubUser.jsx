import React, { useEffect } from 'react'
import { useGithubUser } from './useGithubUser'

function GithubUser({ username }) {
  const {data,loading,error,onfetch} = useGithubUser(username)
  
  useEffect(()=>{
    onfetch(username)
  },[username])

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
