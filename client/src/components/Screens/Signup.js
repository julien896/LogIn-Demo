import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return ( 
        <div className="mycard">
            <div className="card auth-card">
            <h2>Sign Up</h2>
            <input
            type="text"
            placeholder="Name"
            />
            <input
            type="text"
            placeholder="Email"
            />
            <input
            type="text"
            placeholder="Password"
            />
            <button className="btn waves-effect waves-light #0d47a1 blue darken-4" type="submit">
                Sign Up
            </button>
            <h5>
            <Link to='./signin'> Already have an account? </Link>
            </h5>
            </div>
        </div>
        
     );
}
 
export default Signup;


//