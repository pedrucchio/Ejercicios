import useSWR from "swr"

const fetcher = ((url) => fetch(url).then((response) => response.json()))

export function useGithubUser(username) {
    const { data, error, isLoading, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher) 

    return {
        data,
        error, 
        isLoading,
        onRefresh: () => mutate(null)
    }
}
