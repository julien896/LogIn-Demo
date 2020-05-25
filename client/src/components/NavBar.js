import React,{ useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../App'

const NavBar = () => {

  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
   const renderList = () => {
       if(state){
        return[
            //<li><Link to="/profile">profile</Link></li>,
            <li>
            <button className="btn #c62828 red darken-3"
            onClick={ ()=> {
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('./signin')
             }}
            >
                LogOut
            </button>
            </li>
    ]
       }else{
           return[
            <li><Link to="/signin">Login</Link></li>,
            <li><Link to="/signup">SignUp</Link></li>
           ]

       }
    }         
    //to="/"

    return ( 
        <nav>
            <div className="nav-wrapper white">
            <a href="#" className="brand-logo left">Home</a>
            <ul id="nav-mobile" className="right">
            {renderList()}
            </ul>
            </div>
        </nav>
     );
}
 
export default NavBar;