import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";


const TaskSearch = ({setTasks, getTasks, setIsEmpty}) => {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setName(val);
    }

    useEffect(() => {

        if(name.length === 0) {
            getTasks();
            setIsEmpty(false);
        }
        else {
            axios.get(`http://127.0.0.1:8000/search/${name}`)
            .then(res => {
                if (res.data.length === 0) {
                    setIsEmpty(true);
                }
                else {
                    setTasks(res.data)
                    setIsEmpty(false);
                }
            })
            .catch(err => {
                console.log(err)
            })
        }

    }, [name]);

    const handleSubmit = (e) => {
        e.preventDefault();

    }



    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group controlId="formBasicEmail">
                <Form.Control value={name} name="name" onChange={handleChange} type="text" placeholder="Enter task" />
            </Form.Group>

            <button type="submit" className="btn btn-primary">Поиск</button>
        </Form>
    )
}
export default TaskSearch;