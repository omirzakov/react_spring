import React from "react";
import { Card } from "react-bootstrap";
import Notifications, {notify} from 'react-notify-toast';

function Product({ product }) {

    function addCard(name) {
        notify.show("You added " + name + " to basket", "success")
    }


    return (
        <div className="p-3 col-4">
            <Card>
                <Card.Img variant="top" className="p-5" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-left" style={{cursor:"pointer"}}>
                    <small className="text-success" onClick={() => addCard(product.name)} >+ Add to card</small>
                </Card.Footer>
                <Notifications  options={{zIndex: 200, top: '50px'}} />
            </Card>
        </div>
    );
}
export default Product;