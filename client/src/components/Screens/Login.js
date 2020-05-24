import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return ( 
        <div className="mycard">
            <div className="card auth-card">
            <h2>Home Login</h2>
            <input
            type="text"
            placeholder="Email"
            />
            <input
            type="text"
            placeholder="Password"
            />
            <button className="btn waves-effect waves-light #0d47a1 blue darken-4" type="submit">
                Login
            </button>
            <h5>
            <Link to='./signup'> Don't have an account? </Link>
            </h5>
            </div>
        </div>
     );
}
 
export default Login;

//