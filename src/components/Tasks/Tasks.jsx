import React, { useEffect, useState } from "react";

import axios from "axios";
import { Figure } from "react-bootstrap";
import Loading from "../General/Loader/Loading";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import TaskSearch from "./TaskSearch";


const Tasks = () => {
    const [tasks,setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEmpy, setIsEmpty] = useState(false);
    
    useEffect(() => {
        document.title = "Задачи"

        getTasks();
    }, []);

    function getTasks() {
        axios.get("http://127.0.0.1:8000/allcards")
        .then(res => {
            const data = res.data;

            setLoading(false);
            setTasks(data);
            console.log(data)
        });
    }

    return (
        <div>
            <h2 className="mt-3">Задачи компании</h2>
            <TaskSearch setIsEmpty={setIsEmpty} getTasks={getTasks} setTasks={setTasks} />
            <TaskForm getTasks={getTasks} />

            {
                loading ? <Loading /> : 
                <div className="row">
                    
                    {   isEmpy ? <h1 className="text-center m-auto my-3">Task not found</h1> :
                        tasks.map((item, i) => (
                            <div key={i} className="col-4 p-2">
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