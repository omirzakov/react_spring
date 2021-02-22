import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";


const TaskDetailForm = ({id, getDetailTask}) => {
    const [subTask, setTask] = useState({
        id: id,
        name: "",
        addedDate: ""
    })

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/addsubtask', subTask)
             .then(function (res) {
                getDetailTask();
             })
             .catch(function (err) {
                 console.log(err);
             })
    }



    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group controlId="formBasicEmail">
                <Form.Control value={subTask.name} name="name" onChange={handleChange} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="date" name="addedDate" onChange={handleChange} value={subTask.addedDate} />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </Form>
    )
}
export default TaskDetailForm;