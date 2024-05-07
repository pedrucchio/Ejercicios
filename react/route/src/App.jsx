import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import GithubUser from './GithubUser';
import { GithubUsers } from './GithubUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Juan" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUsers />} />
        <Route path="/users/:username" element={<GithubUser />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
      <div>
        <Link className="link-styles" to="/">
          Home
        </Link>
        <Link className="link-styles" to="/counter">
          Counter
        </Link>
        <Link className="link-styles" to="/users">
          Users
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;