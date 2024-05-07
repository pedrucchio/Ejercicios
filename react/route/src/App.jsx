import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import GithubUser from "./GithubUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Juan" />}/>
        <Route path="/counter" element={ <Counter />} />
        <Route path="/users/:username" element={<GithubUser />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
      <div>
				<Link to="/">Home</Link>
				<Link to="/counter">Counter</Link>
				<Link to="/users/pedrucchio">Pedro Grandini</Link>
			</div>
    </BrowserRouter>
  )
}

export default App
