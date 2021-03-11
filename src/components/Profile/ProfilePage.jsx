import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { AuthContext } from "../../App";
import Loading from "../General/Loader/Loading";
import ProfileEditForm from "./ProfileEditFormName";
import ProfileEditFormPassword from "./ProfileEditFormPassword";


const ProfilePage = () => {
    const {cookie} = useContext(AuthContext);
    const [data, setData] = useState([]);
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
    }, []);

    return (
        <div>
            {
                load ? <Loading /> : 
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-5">
                                <img style={{borderRadius:50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD128GIzwKKLZ6BNC-MIKo5577nxG7d0t15Q&usqp=CAU" alt=""/>
                            </div>
                            <div className="col-7">
                                <h2> Hello {data.email} </h2>
                                <h2>{data.fullname != null ? <span>{ data.fullname }</span> : <span>You did not write your name</span> }</h2>
                            </div>
                        </div>

                        <ListGroup className="mt-3" horizontal>
                            {
                                data.roles.map((role, i) => (
                                    <ListGroup.Item key={i}>{role.name}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                    <div className="col-6">
                        <ProfileEditForm data={data} />
                        <ProfileEditFormPassword data={data} />
                    </div>
                </div>
            }
        </div>
    );
}
export default ProfilePage;