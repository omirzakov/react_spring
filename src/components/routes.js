import React from "react";
import About from "./About/About";
import Home from "./Home/Home";
import TaskDetail from "./Tasks/TaskDetail";
import Tasks from "./Tasks/Tasks";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/tasks",
        component: Tasks
    },
    {
        path: "/tasks/:id/",
        component: TaskDetail
    }
];

export default routes;