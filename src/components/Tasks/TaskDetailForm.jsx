import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Notifications, {notify} from 'react-notify-toast';


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
                notify.show("Задача успешно добавлена");
                getDetailTask();

             })
             .catch(function (err) {
                 console.log(err);
             })
    }



    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group controlId="formBasicEmail">
                <Form.Control value={subTask.name} name="name" onChange={handleChange} type="text" placeholder="Enter task" />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Добавить</button>
            <Notifications  options={{zIndex: 200, top: '30px', background:"green"}} />
        </Form>
    )
}
export default TaskDetailForm;