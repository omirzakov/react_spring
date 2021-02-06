import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const initialState = {
    name: "",
    description: "",
    imageURL: "",
    uriName: ""
};

function ProductAdd({ setData, data }) {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(initialState);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({...product, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://127.0.0.1:5001/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => {
            const newArray = [...data];
            newArray.push(data);
            setData(newArray);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add product
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" name="name" value={product.name} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Product description</Form.Label>
                            <Form.Control type="text" name="description" value={product.description} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name="imageURL" value={data.imageURL} onChange={handleChange} />
                            <img src={product.imageUrl} alt="" width="150px"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Uriname</Form.Label>
                            <Form.Control type="text" name="uriName" value={data.uriName} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ProductAdd;