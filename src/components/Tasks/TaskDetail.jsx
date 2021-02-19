import React, { useEffect, useState } from "react";


import { Figure } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../General/Loader/Loading";


const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cards/${id}`)
            .then(res => {
                const data = res.data;
                setLoading(false);
                setTask(data);
            });
    }, []);

    return (
        <>
            {
                loading ? <Loading /> : 
                <Figure style={{ border: "1px solid #eee" }} className="p-5">
                    <Figure.Image
                        width="50%"

                        style={{ borderRadius: 6, margin: "0 auto", textAlign:"center" }}
                        height={180}
                        alt="171x180"
                        src="https://mohitkhare.com/images/blog/running-periodic-background-task-golang/running-periodic-background-task-golang.png"
                    />
                    <Figure.Caption>
                        <p style={{ fontSize: 20 }}> { task.name } </p>
                    </Figure.Caption>
                </Figure>
            }
        </>
    );
}
export default TaskDetail;