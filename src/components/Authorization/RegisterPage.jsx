import axios from "axios";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const RegisterPage = () => {
    const [user, setUser] = useState({email: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/register", user)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser(prev => ({...prev, [name]: value}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mt-5">
                    <FormControl type="email" name="email" value={user.email} onChange={handleChange} placeholder="Name" />
                </div>
                <div className="mt-5">
                    <FormControl type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
                
            </form>
        </div>
    );
}
export default RegisterPage;