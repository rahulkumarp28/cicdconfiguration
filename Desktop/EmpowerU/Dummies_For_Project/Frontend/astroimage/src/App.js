import './App.css';
//import {ResponsiveAppBar} from './Landing_page/javascript/component.js'

//import React, { useState } from 'react';

import ResponsiveAppBar from './Landing_page/javascript/component.js';
import loginpage from './login/javascript/loginpage.js';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import signup from './signup/javascript/signup.js';
import Signup from './signup/signup.js';



function App() {
  
  return (
    <>
      
      <BrowserRouter>
      
            <Routes>
                <Route path="/" element={<ResponsiveAppBar/>} />
                <Route path="/loginpage" Component={loginpage} />
                <Route path="/signup" Component={Signup} />
            </Routes>
      </BrowserRouter>
      
      
    </>
   
  );
}

export default App;
