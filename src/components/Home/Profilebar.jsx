import React from "react";
import { Card } from "react-bootstrap";

function Profilebar() {

    return (
        <Card  style={{ width: '18rem' }}>
            <Card.Header>Hello Admin</Card.Header>
            <Card.Body>
                <Card.Title>Age: 20</Card.Title>
                <Card.Text>
                    Fullname: Madiyar Umirzakov <br/>
                    City: Almaty
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Profilebar;