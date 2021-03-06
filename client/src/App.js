import React, {Fragment, useEffect, createContext, useReducer, useContext} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter, Route, useHistory} from 'react-router-dom'
import Home from './components/Screens/Home'
import Signup from './components/Screens/Signup'
import Signin from './components/Screens/Signin'
import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () =>{
  const history=useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
     dispatch({type:"USER", payload:user})
      //history.push('/')
    }else{
      history.push('/signin')
    }
  },[])
  return(
<Fragment>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          
</Fragment>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
          <NavBar/>
          <Routing/>
        
      </BrowserRouter>
      </UserContext.Provider>
    
  );
}

export default App;
