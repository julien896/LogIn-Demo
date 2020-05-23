import React, {Fragment} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Screens/Home'
import Profile from './components/Screens/Profile'
import Signup from './components/Screens/Signup'
import Signin from './components/Screens/Login'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <NavBar/>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
