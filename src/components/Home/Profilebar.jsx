import React from "react";
import { Card } from "react-bootstrap";
import ProductAdd from "../Products/ProductAdd";

function Profilebar({ data, setData }) {

    return (
        <Card  style={{ width: '18rem' }}>
            <Card.Header>Hello Admin</Card.Header>
            <Card.Body>
                <Card.Title>Age: 20</Card.Title>
                <Card.Text>
                    Fullname: Madiyar Umirzakov <br/>
                    City: Almaty
                </Card.Text>
                <ProductAdd data = {data} setData={setData} />
            </Card.Body>
        </Card>
    );
}
export default Profilebar;