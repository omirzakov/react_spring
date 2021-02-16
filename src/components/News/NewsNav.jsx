import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import news from "../../data/news";

const NewsNav = () => {
    return (
        <Nav activeKey="/home"
             onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            {
                news.map((nav, i) => (
                    <Nav.Item key={i}>
                        <NavLink className="mx-3"  activeClassName="text-info" to={`/news/categories/${nav.uri_name}/`}>
                            { nav.title } 
                        </NavLink>
                    </Nav.Item>
                ))
            }
        </Nav>
    );
}
export default NewsNav;