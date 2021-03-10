import axios from "axios";
import React, { useContext, useState } from "react";
import { FormControl } from "react-bootstrap";
import { useCookies } from "react-cookie";
import Notifications, {notify} from 'react-notify-toast';
import { AuthContext } from "../../App";


const LoginPage = () => {
    const { setCookie } = useContext(AuthContext);
    const [user, setUser] = useState({email: "", password: ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/auth", user)
            .then(res => {
                notify.show("Вы успешно зашли", "success");
                setCookie("token", res.data.token, { maxAge: 3600});
                window.location.replace("/");
            })
            .catch(err => {
                notify.show("Вы неправильно ввели данные", "error");
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
                <Notifications  options={{zIndex: 200, top: '30px', background:"green"}} />
            </form>
        </div>
    );
}
export default LoginPage;