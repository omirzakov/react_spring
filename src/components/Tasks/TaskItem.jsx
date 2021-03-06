import React from "react";

import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


const TaskItem = ({task}) => {

    return (
        <Link to={`/tasks/${task.id}/`} style={{width:"450px"}}>
            <Figure style={{border: "1px solid #eee", background:"#eee", width:"100%", textAlign:"center"}} className="p-5">
                <h1 className="mb-5">TASK № { task.id }</h1>
                <Figure.Caption style={{textAlign:"center"}}>
                    <p style={{fontSize: 20}}>{ task.name }</p>
                </Figure.Caption>
            </Figure>
        </Link>
    );
}
export default TaskItem;