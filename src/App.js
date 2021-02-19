import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Products/ProductDetail";
import News from "./components/News/News";
import routes from "./components/routes";

const customStyles = {
    maxWidth: "1350px",
    margin: "0 auto"
}

const items = [
    {
        name: "Iphone 12"
    },
    {
        name: "Samsung G20"
    },
    {
        name: "Oppo f10"
    }
]


function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    
    return (
        <div className="App">
            <div style={customStyles}>
            <Header isAuth = {isAuth} setIsAuth={setIsAuth} />

            
            <div style={{minHeight:"80vh"}}>
                <Switch>
                    {
                        routes.map((route, i) => (
                            <Route key={i} component={route.component} path={route.path} exact={true} />
                        ))
                    }
                </Switch>
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default App;
