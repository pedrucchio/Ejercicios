import { useGithubUser } from "./useGithubUser"




function GithubUser({username}) {
    const {data, error, isLoading, onRefresh} = useGithubUser(username)
 
    

  return (
    <div>
        {data && <img src={data.avatar_url} alt="" />}
        {data && <h1>{data.name}</h1> }
        {data && <h2>{data.login}</h2>}
        {!data && error && <h1>Error</h1>}
        {!data && isLoading && <h1>Loading</h1>}
        <button onClick={onRefresh}>Refresh</button>
    </div>
  )
}

export default GithubUser
