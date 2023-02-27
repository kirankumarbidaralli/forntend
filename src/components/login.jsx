import { useState } from "react";
import { Link } from "react-router-dom";

const Login=()=>{

    let [email,setEmail] = useState("")
    let [password,Setpassword] = useState("")

    let handleSubmit=()=>{

    }


    return(
        <div className="login">
            <h1 className="text-center">Login page</h1>
            <div className="form-group px-5">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email my-5">
                        <input type="email" placeholder="Email" className="form-control w-50"
                         name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Password" className="form-control w-50" 
                        name="password" value={password} onChange={(e)=> Setpassword(e.target.value)}/>
                    </div>
                    <div className="option">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                    <div className="signup_btn">
                        <p>Are u a new user</p>
                        <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;