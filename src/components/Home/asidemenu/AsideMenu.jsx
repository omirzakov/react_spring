import React from "react";
import { ListGroup } from "react-bootstrap";

const categories = [
    {
        name: "Mobile phones"
    },
    {
        name: "Laptops"
    },
    {
        name: "Smart watches"
    },
    {
        name: "TV"
    },
    {
        name: "Keyboards"
    },
    {
        name: "Mouse"
    }
]

function AsideMenu() {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }


    return (
        <ListGroup defaultActiveKey="#link1" className="mt-5">
            {
                categories.map((category, i) => (
                    <ListGroup.Item className="text-left" action onClick={alertClicked} key={i}>
                        {
                            category.name
                        }
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}
export default AsideMenu;