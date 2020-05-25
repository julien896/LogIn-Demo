import React,{useState, useContext} from 'react';
import M from 'materialize-css';
import {UserContext} from '../../App'
import { Link,useHistory } from 'react-router-dom'

const Signin = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email !!",classes:"#b71c1c red darken-4"})
            return
        }
        fetch("/signin", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#b71c1c red darken-4"})  
            } else {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                M.toast({html: "SignedIn Success",classes:"#2e7d32 green darken-3"})
                history.push('/')
            }
        }).catch (err=>{
            console.log(err)
        })
    }
    return ( 
        <div className="mycard">
            <div className="card auth-card">
            <h2>Home Login</h2>
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
            onClick={() => PostData() }
            >
                Login
            </button>
            <h5>
            <Link to='./signup'> Don't have an account? </Link>
            </h5>
            </div>
        </div>
     );
}
 
export default Signin;

