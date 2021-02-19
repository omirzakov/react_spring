import React, { useEffect, useState } from "react";

import axios from "axios";
import { Figure } from "react-bootstrap";
import Loading from "../General/Loader/Loading";
import TaskItem from "./TaskItem";


const Tasks = () => {
    const [tasks,setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        document.title = "Задачи"

        axios.get("http://127.0.0.1:8000/allcards")
        .then(res => {
            const data = res.data;

            setLoading(false);
            setTasks(data);
            console.log(data)
        });
    }, []);

    return (
        <div>
            <h2 className="mt-3">Задачи компании</h2>

            {
                loading ? <Loading /> : 
                <div className="row">
                    {
                        tasks.map((item, i) => (
                            <div key={i} className="col-4 p-3">
                                 <TaskItem task={item} />
                            </div>
                        ))
                    }
                </div>
            }
            <div className="row">
                
            </div>
        </div>
    );
}
export default Tasks;