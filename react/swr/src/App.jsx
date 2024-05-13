import React from 'react'
import {  Link,  Route, Routes } from "react-router-dom";
import GithubUsers from './GithubUsers';
import GithubUser from './GithubUser';
function App() {


  return (
    <div>
        <Routes>
          <Route path="/" element={<GithubUsers />} />
          <Route path="/*" element={<div>Not Found</div>} />
        </Routes>
    </div>
  )
}

export default App
