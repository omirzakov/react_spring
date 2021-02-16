import React from "react";
import { Card } from "react-bootstrap";
import { useCookies } from "react-cookie";
import Notifications, {notify} from 'react-notify-toast';

function Product({product}) {
    const [cookies, setCookie, removeCookie] = useCookies(['basket']);
    function addCard(name, id) {

        notify.show("You added " + name + " to basket", "success");
        if (!cookies.basket) {
            setCookie("basket", id);
            return true;
        }

        let basket = cookies.basket;
        basket = basket + " " + id;
        setCookie("basket", basket);
        let arr = basket.split(" ");
    }

    


    return (
        <div className="p-3 col-4">
            <Card>
                <Card.Img variant="top" className="p-5" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-left" style={{cursor:"pointer"}}>
                    <small className="text-success" onClick={() => addCard(product.name, product.id) } >+ Add to card</small>
                </Card.Footer>
                <Notifications  options={{zIndex: 200, top: '50px'}} />
            </Card>
        </div>
    );
}
export default Product;