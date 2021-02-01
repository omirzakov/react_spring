import React from "react";
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Test from "./components/About/Test";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <div style={{minHeight:"80vh"}}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/test">
                        <Test />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
