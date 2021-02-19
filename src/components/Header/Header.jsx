import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header ({isAuth, setIsAuth}) {
    const logo = "https://lvgames.info/wp-content/uploads/2019/01/Nintendo-eShop-logo.jpg";

    function logOut() {
        setIsAuth(false);
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
                    {
                        !isAuth && <Nav.Link href="/register">Register</Nav.Link>
                    }
                                        {
                        isAuth && <Link className="nav-link"  to="/news">News</Link>
                    }
                    <Link to="/tasks/" className="nav-link" onClick={logOut}>Tasks</Link>
                    <Link to="#" className="nav-link" onClick={logOut}>{!isAuth ? "Login" : "Logout"}</Link>
                    <Nav.Link href="/ru">РУС</Nav.Link>
                    <Nav.Link href="/en">EN</Nav.Link>
                </Nav>
            </Navbar>
      </div>
    );
}
export default Header;