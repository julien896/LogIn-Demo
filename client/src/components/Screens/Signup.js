import React,{ useState } from 'react';
import M from 'materialize-css';
import {Link, useHistory} from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email !!",classes:"#b71c1c red darken-4"})
            return
        }
        fetch("/signup", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#b71c1c red darken-4"})  
            } else {
                M.toast({html: data.message,classes:"#2e7d32 green darken-3"})
                history.push('/signin')
            }
        }).catch (err=>{
            console.log(err)
        })
    }
    

    return ( 
        <div className="mycard">
            <div className="card auth-card">
            <h2>Sign Up</h2>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #0d47a1 blue darken-4" 
            onClick={()=> PostData()}
            >
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