import React, { useContext, useState } from'react';
import Input from '../form/Input';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useAuth from '../hook/useJwt';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setClassname, setMessage} = useOutletContext()
    const navigate = useNavigate();

    const {jwt, setJwt} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is request for authentication and storing it in variable 
        /*
        let payload = {
            email: email,
            password: password
        },
        const requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        }

        fetch('http://localhost:5000/login', requestOption)
        .then(res => res.json()).then(data => {
            if(data.error){
                setClassname("alert-danger")
                setMessage(Invalid Credentials)
            }
            else{
                setClassname("d-none")
                setMessage("")
                setJwt(data.token)
                navigate("/")
            }
        }
        .catch(err => {
            setClassname("alert-danger")
            setAlertMessage(error.message)
        })
        */
        if(email==="admin@email.com" && password==="admin"){
            setClassname(" d-none")
            Cookies.set("jwt", jwt)
            setMessage("")
            setJwt("admin@email.com")
            navigate("/home")

        } else{
            setClassname("alert-danger")
            setMessage("Invalid Credentials")
        }
        
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <Input 
                title="Email"
                type="email"
                className="form-control"
                name="email"
                autocomplete="email-new"
                onChange={e => setEmail(e.target.value)}
            
                />
                <Input 
                title="Password"
                type="password"
                className="form-control"
                name="password"
                autocomplete="password-new"
                onChange={e => setPassword(e.target.value)}
            
                />

                <hr />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export  default LoginPage;