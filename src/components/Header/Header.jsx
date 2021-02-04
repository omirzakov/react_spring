import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header ({isAuth, setIsAuth}) {

    function logOut() {
        setIsAuth(false);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Nav className="ml-auto">
                    {
                        !isAuth && <Nav.Link href="/register">Register</Nav.Link>
                    }
                    <Nav.Link href="#" onClick={logOut}>{!isAuth ? "Login" : "Logout"}</Nav.Link>
                    <Nav.Link href="/ru">РУС</Nav.Link>
                    <Nav.Link href="/en">EN</Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
}
export default Header;