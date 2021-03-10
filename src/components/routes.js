import About from "./About/About";
import LoginPage from "./Authorization/LoginPage";
import RegisterPage from "./Authorization/RegisterPage";
import Home from "./Home/Home";
import ProfilePage from "./Profile/ProfilePage";
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
    },
    {
        path: "/register/",
        component: RegisterPage
    },
    {
        path: "/login/",
        component: LoginPage
    },
    {
        path: "/profile/",
        component: ProfilePage
    }
];

export default routes;