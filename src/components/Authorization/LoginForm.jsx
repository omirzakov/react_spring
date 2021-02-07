import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function LoginForm(props) {

    function handleSubmit(e) {
        e.preventDefault();


        if (props.name === "admin" && props.password === "12345") {
            alert("Hello admin");
            props.setIsAuth(true);
        }
        else {
            alert("Something wrong");
            props.setIsAuth(false);
        }
    }

    function handleChange(e) {
        let name;
        let password;

        if(e.target.name === "name") {
            name = e.target.value;
            props.setName(name);
        }
        else {
            password = e.target.value;
            props.setPassword(password);
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Form.Group controlId="formBasicEmail">
                <Form.Control onChange={handleChange} name="name" type="name" placeholder="Login" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <div className="ml-auto text-left">
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    );
}
export default LoginForm