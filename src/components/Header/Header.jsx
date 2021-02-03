import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header () {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/ru">РУС</Nav.Link>
                    <Nav.Link href="/en">EN</Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
}
export default Header;