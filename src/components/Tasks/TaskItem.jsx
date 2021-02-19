import React from "react";

import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


const TaskItem = ({task}) => {

    return (
        <Link to={`/tasks/${task.id}/`}>
            <Figure style={{border: "1px solid #eee"}} className="p-5">
                <Figure.Image
                    width="80%"
                    style={{borderRadius:6}}
                    height={180}
                    alt="171x180"
                    src="https://mohitkhare.com/images/blog/running-periodic-background-task-golang/running-periodic-background-task-golang.png"
                />
                <Figure.Caption style={{textAlign:"center"}}>
                    <p style={{fontSize: 20}}>{ task.name }</p>
                </Figure.Caption>
            </Figure>
        </Link>
    );
}
export default TaskItem;