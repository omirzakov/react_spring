import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import Loading from "../General/Loader/Loading";


const ProfilePage = () => {
    const {cookie} = useContext(AuthContext);
    const [data, setData] = useState("");
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/getprofile/${cookie.token}`)
            .then(res => {
                setData(res.data);
                setLoad(false);
            })
            .catch(err => {
                console.log(err);
            })
    });

    return (
        <div>
            {
                load ? <Loading /> : 
                <div>
                    <h1 className="text-center my-5">Hello {data}</h1>
                </div>
            }
        </div>
    );
}
export default ProfilePage;