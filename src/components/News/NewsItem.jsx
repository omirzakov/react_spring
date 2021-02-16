import React from "react";
import { Card } from "react-bootstrap";


const NewsItem = ({item}) => {

    return (
        <div className="col-6 p-3">
            <Card className="p-2">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title>
                    {item.title}
                </Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    );
}
export default NewsItem;