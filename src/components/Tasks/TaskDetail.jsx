import React, { useEffect, useState } from "react";


import { Accordion, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../General/Loader/Loading";
import "./styles/taskdetail.css"
import TaskDetailForm from "./TaskDetailForm";
import Notifications, {notify} from 'react-notify-toast';


const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tasksLoad, setTasksLoad] = useState(true);
    const [text, setText] = useState("");


    useEffect(() => {
        getTask();
    }, []);

    useEffect(() => {
        getDetailTask();
    }, []);

    const getTask = () => {
        axios.get(`http://127.0.0.1:8000/card/${id}`)
        .then(res => {
            const data = res.data;
            setLoading(false);
            setTask(data);
        });
    }

    const getDetailTask = () => {
        axios.get(`http://127.0.0.1:8000/cards/${id}`)
        .then(res => {
            const data = res.data;
            console.log(data)
            setTasksLoad(false);
            setTasks(data);
        });
    }

    const updateTask = (e, id) => {
        e.preventDefault();

        const item = tasks.find(function (item) {
            if (item.id === id) {
                return true;
            }
        });

        item.name = text;

        axios.put(`http://127.0.0.1:8000/updatesubtask`, item)
            .then(function (res) {
                getDetailTask();
                notify.show("Вы успешно обновили задание");
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    const handleChange = (e, id) => {
        const updatedArray = [...tasks];
        const elemIndex = updatedArray.findIndex(el => el.id == id);

        updatedArray[elemIndex] = {...updatedArray[elemIndex], name: e.target.value}
        setTasks(updatedArray);
        setText(e.target.value);
    }

    const deleteSubTask = (taskItem) => {
        console.log(task)
        axios.post(`http://127.0.0.1:8000/deletesubtask/${taskItem.id}`, taskItem)
            .then(function(res) {
                getDetailTask();
                notify.show("Вы удалили задание");
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    const handleChangeMain = (e) => {
        const { name, value } = e.target;

        setTask({...task, name: value});
    }

    const handleSubmitUpdateTask = (e) => {
        e.preventDefault();

        axios.put("http://127.0.0.1:8000/updatecard", task)
            .then((res) => {
                getTask();
                notify.show("Изменение успешно сохранено");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleDeleteTask = () => {

        axios.delete(`http://127.0.0.1:8000/deletecard/${task.id}`, task)
            .then((res) => {
                window.location.replace("/tasks/");
            })
            .catch((err) => {
                notify.show("Чтобы удалить главную карточку, удалите все дочерние задачи");
            })
    }

    //CASCADE
    
    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="my-5 p-5 text-center border" style={{width:"100%", background: `url('https://www.designyourway.net/blog/wp-content/uploads/2020/05/Light-Gray-Linen-Paper-Texture-Highest-quality-possible.jpg')`}}>
                        <p style={{fontSize: 40}}>
                            { task.name }
                        </p>
                    </div>
            }

            <Form onSubmit={handleSubmitUpdateTask}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control name="name" onChange={handleChangeMain} type="text" placeholder="Text" />
                </Form.Group>
                <button type="submit" className="btn btn-primary">
                    Обновить
                </button>
                <div className="btn btn-danger ml-3" onClick={handleDeleteTask}>
                    Удалить
                </div>
            </Form>

            <hr /> <br />

            <TaskDetailForm getDetailTask={getDetailTask} id={id} />

            {
                !tasksLoad &&
                tasks.map((task, i) => (
                    <Card className="mb-3" key={i}>
                        <Card.Header>Задача №{i + 1}</Card.Header>
                        <Card.Body>
                            <Card.Title>{task.name}</Card.Title>
                            <Card.Text>
                                {
                                    task.addedDate
                                }
                            </Card.Text>
                        </Card.Body>

                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle  variant="link" eventKey="0">
                                    <div>Редактировать</div>
                                </Accordion.Toggle>
                                <div className="btn btn-danger ml-3 mb-1" onClick={() => deleteSubTask(task)}>
                                    Удалить
                                </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form onSubmit={(e) => updateTask(e, task.id)}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control onChange={(e) => handleChange(e, task.id)} value={task.name} name="name" type="text" placeholder="Enter text" />
                                            <button type="submit" className="btn btn-primary mt-3">Сохранить</button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Notifications  options={{zIndex: 200, top: '30px', background:"green"}} />
                            </Card>
                        </Accordion>
                    </Card>
                ))
            }
        </>
    );
}
export default TaskDetail;