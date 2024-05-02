import { Counter } from "./Counter"
import CurrentLocation from "./CurrentLocation"
import GithubUsers from "./GithubUsers"
import InteractiveWelcome from "./InteractiveWelcome"

function App() {
  return (
    <div>
      <Counter />
      <InteractiveWelcome />
      <GithubUsers />
      <CurrentLocation />
    </div>
  )
}

export default App
