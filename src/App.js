import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
                    <Route exact path="/">
                        <Home name={name} 
                              password={password}
                              setName={setName}
                              setPassword={setPassword}
                              isAuth = {isAuth}
                              setIsAuth={setIsAuth} 
                              items={items} />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
            <Footer />
            </div>
        </div>
    );
}

export default App;
