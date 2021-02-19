import React, { useEffect, useState } from "react";


import { Accordion, Card, Figure } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../General/Loader/Loading";
import { Button } from "bootstrap";
import "./styles/taskdetail.css"


const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tasksLoad, setTasksLoad] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/card/${id}`)
            .then(res => {
                const data = res.data;
                setLoading(false);
                setTask(data);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cards/${id}`)
            .then(res => {
                const data = res.data;
                console.log(data)
                setTasksLoad(false);
                setTasks(data);
            })
    }, []);

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

            {
                !tasksLoad &&
                tasks.map((task, i) => (
                    <Card className="mb-3">
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
                                    Редактировать
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle  variant="link" eventKey="1">
                                    Удалить
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                ))
            }
        </>
    );
}
export default TaskDetail;