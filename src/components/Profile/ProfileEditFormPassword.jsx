import axios from "axios";
import React, { useContext, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Notifications, {notify} from 'react-notify-toast';
import { AuthContext } from "../../App";

const defPassword = {
    old: "",
    new: "",
    repeat: ""
}

const ProfileEditFormPassword = ({ data }) => {
    const [password, setPassword] = useState(defPassword);
    const { cookie } = useContext(AuthContext);

    const handleChangePassword = (e) => {
        const { value, name } = e.target;

        setPassword(prev => (
            {...prev, [name]: value}
        ));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.new !== password.repeat) {
            notify.show("Пароли не совпадают", "error");

            return;
        }

        axios.post(`http://127.0.0.1:8000/updatepassword/${cookie.token}/${password.old}/${password.new}`)
            .then(res => {
                notify.show("Пароль успешно обновлен", "success");
            })
            .catch(err => {
                notify.show("Старый пароль не совпадает", "error");
            })
    }


    return (
        <form className="px-5 mt-5" onSubmit={handleSubmit}  >
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Old password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    name="old"
                    onChange={handleChangePassword}
                    type="password"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">New password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    name="new"
                    onChange={handleChangePassword}
                    type="password"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Repeat new password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    name="repeat"
                    onChange={handleChangePassword}
                    type="password"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <button type="submit" className="btn btn-primary">Save</button>
            <Notifications />
        </form>
    );
}
export default ProfileEditFormPassword;