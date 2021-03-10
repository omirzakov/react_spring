import React, {createContext, useState} from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Products/ProductDetail";
import News from "./components/News/News";
import routes from "./components/routes";
import { useCookies } from "react-cookie";

const customStyles = {
    maxWidth: "1350px",
    margin: "0 auto"
}

export const AuthContext = createContext();

function App() {
    const [cookie, setCookie, removeCookie] = useCookies(['token']);
    const [isAuth, setIsAuth] = useState(false);

    
    return (
        <AuthContext.Provider value={{cookie, setCookie,isAuth, setIsAuth, removeCookie}}>
        <div className="App">
            <div style={customStyles}>
            <Header />

            
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
        </AuthContext.Provider>
    );
}

export default App;
