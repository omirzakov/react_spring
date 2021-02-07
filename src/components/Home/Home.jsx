import React, { useState, useEffect } from "react";
import LoginForm from "../Authorization/LoginForm";
import Product from "../Products/Product";
import Profilebar from "../Profile/Profilebar";
import AsideMenu from "./asidemenu/AsideMenu";
import "./style/style.css";
import Loading from "../General/Loader/Loading";

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://127.0.0.1:5001/products")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            console.log(data)
        })
    }, []);


    return (
        <div className="my-5">
            <div className="row">
                <div className="col-3">
                    <div className="login-form bg-light p-3 aside-menu">
                        {
                            props.isAuth === true ?
                                <Profilebar setData={setData} data={data} /> :
                                <LoginForm
                                    name={props.name}
                                    password={props.password}
                                    setName={props.setName}
                                    setPassword={props.setPassword}
                                    setIsAuth={props.setIsAuth} />
                        }
                        <AsideMenu />
                    </div>
                </div>
                <div className="col-9">
                    <div className="product-list row">
                        {
                            loading ? <Loading /> :
                            data.map((product, i) => (
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