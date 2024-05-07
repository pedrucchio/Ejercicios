import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
