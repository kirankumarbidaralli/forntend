import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sign=()=>{

    let [name,setName] = useState("")
    let [number,setNumber] = useState("")
    let [email,Setemail] = useState("")
    let [pass,setPass] = useState("")
    let [confrompass,Setconfrompass] = useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let data ={name,email,pass,confrompass}
        if (name && email && (pass === confrompass)) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
                console.log(data);
            })
        } else {
            alert("invalid credentials")
        }
    }
    return(
        <div className="signin">
            <h1>Sign up page</h1>
            <div className="from_sign">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="name" placeholder="Enter your name" className="form-control w-50" name="name" />
                    </div>
                    {/* <div className="mobile_num">
                        <input type="mobilenumber" placeholder="Enter your mobile nuber" className="form-control w-50" name="mobilenumber" />
                    </div> */}
                    <div className="email">
                        <input type="email" placeholder="Enter your email" className="form-control w-50" name="email" />
                    </div>
                    <div className="pass">
                        <input type="password" className="form-control w-50" name="password" placeholder="Enter your password" />
                    </div>
                    <div className="confo_pass">
                        <input type="confrom_password" placeholder="Confrom your password" name="COnfrom_password" className="form-control w-50" />
                    </div>
                    <div className="Signup_button">
                        <button className="btn btn-outline-secondary">Sign Up</button>
                    </div>
                    <div className="login_button">
                        <p>Already user</p>
                        <Link to="/" className="btn btn-outline-primary">Login in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Sign;