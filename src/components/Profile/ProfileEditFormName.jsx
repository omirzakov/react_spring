import axios from "axios";
import React, { useContext, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { AuthContext } from "../../App";
import Notifications, {notify} from 'react-notify-toast';


const ProfileEditForm = ({data}) => {
    const [fullname, setFullname] = useState(data.fullname || "");
    const { cookie } = useContext(AuthContext);

    const handleChangeFullname = (e) => {
        const { value } = e.target;

        setFullname(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/updatename/${cookie.token}/${fullname}`)
            .then(data => {
                if(data.status === 200 ) {
                    notify.show("Данные успешно обновлены", "success");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <form className="px-5" onSubmit={handleSubmit}>
            <h2>Update profile</h2>
            <div class="alert alert-secondary" role="alert">
                { data.email }
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Fullname</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                value={fullname}
                name="fullname"
                onChange={handleChangeFullname}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <button className="btn btn-primary">Save</button>
            <Notifications />
        </form>
    );
}
export default ProfileEditForm;