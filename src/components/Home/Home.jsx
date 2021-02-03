import React, {useState} from "react";
import LoginForm from "./LoginForm";


function Home(props) {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    function getItem(item) {
        alert("You added to basket " + item.name )
    }
  

    return (
        <div className="my-5">
            <div className="row">
                <div className="col-3">
                    <div className="login-form">
                        {
                            props.isAuth === true ?
                            "Online" :
                            <LoginForm 
                                name={props.name} 
                                password={props.password}
                                setName={props.setName}
                                setPassword={props.setPassword}
                                setIsAuth={props.setIsAuth}  />
                        }
                    </div>
                </div>
                <div className="col-9">
                    <div className="product-list">
                        {
                            props.items.map((item, i) => (
                                <div className="my-3" key={i}>
                                    {item.name}
                                    <div className="btn btn-primary" onClick={() => getItem(item)}>
                                        Button
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;