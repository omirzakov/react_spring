import React, {useState} from "react";
import LoginForm from "./LoginForm";
import Product from "./Product";
import Profilebar from "./Profilebar";
import AsideMenu from "./asidemenu/AsideMenu";
import "./style/style.css";

const productList = [
    {
        name: "Iphone 6s",
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2249_0_320.webp"
    },
    {
        name: "Iphone 7",
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1084_0_320.webp"
    },
    {
        name: "Iphone SE",
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2744_3_6_320.webp"
    },
    {
        name: "Iphone XR",
        image: "https://object.pscloud.io/cms/cms/Photo/img_0_77_2758_0_6_320.webp"
    }
];


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
                    <div className="login-form bg-light p-3 aside-menu">
                        {
                            props.isAuth === true ?
                            <Profilebar /> :
                            <LoginForm 
                                name={props.name} 
                                password={props.password}
                                setName={props.setName}
                                setPassword={props.setPassword}
                                setIsAuth={props.setIsAuth}  />
                        }
                        <AsideMenu />
                    </div>
                </div>
                <div className="col-9">
                    <div className="product-list row">
                        {
                            productList.map((product, i) => (
                                <Product key={i} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;