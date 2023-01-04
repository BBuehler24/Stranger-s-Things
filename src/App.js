import React, { useEffect } from 'react';
import "./index.css";
import { Nav, AllPosts, SignupOrLogin } from "./components";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const App = ()=> {
  return (
    <BrowserRouter>
    <Nav />
      <h1>Strangers Things</h1>
      <nav>
        <Link to='/posts'>All Posts ({AllPosts.length})</Link> <br/>
        <Link to='/loginsignup'>SignUp/Login</Link>
      </nav>
      <Routes>
        <Route path='/posts' element={<AllPosts />} />
        <Route path='/loginsignup' element={<SignupOrLogin />} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
