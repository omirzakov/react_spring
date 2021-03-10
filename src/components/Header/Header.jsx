import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

function Header () {
    const {cookie, setIsAuth, isAuth, removeCookie} = useContext(AuthContext);
    const logo = "https://lvgames.info/wp-content/uploads/2019/01/Nintendo-eShop-logo.jpg";

    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/validate/token/${cookie.token}`)
            .then(res => {
                if(res.data && cookie.token) {
                    console.log("asdsa")
                    setIsAuth(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const logOut = () => {
        removeCookie("token");
        window.location.replace("/");

    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <Link to="/">
                        <img src={logo} alt="Logo" width="100px"/>
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/tasks/" className="nav-link" >Tasks</Link>
                    {
                        isAuth && isAuth === true ?
                        <div className="d-flex">
                            <div className="nav-link" onClick={logOut}>Logout</div>
                            <Link to="/profile/" className="nav-link">Profile</Link>
                        </div> :
                        <div className="d-flex">
                            <Link to="/login/" className="nav-link">Login</Link>
                            <Link to="/register/" className="nav-link">Register</Link>
                        </div>
                    }
                    <Nav.Link href="/ru">РУС</Nav.Link>
                    <Nav.Link href="/en">EN</Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
}
export default Header;