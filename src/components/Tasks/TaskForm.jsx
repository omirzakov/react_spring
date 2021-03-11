import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";


const TaskForm = ({getTasks}) => {
    const [task, setTask] = useState({
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

        axios.post('http://127.0.0.1:8000/addtask', task)
             .then(function (res) {
                getTasks();
             })
             .catch(function (err) {
                 console.log(err);
             })
    }



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control value={task.name} name="name" onChange={handleChange} type="text" placeholder="Enter task" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="date" name="addedDate" />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </Form>
    )
}
export default TaskForm;