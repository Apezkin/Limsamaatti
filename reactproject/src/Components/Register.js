import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../Login.css";
import {Link} from "react-router-dom";

function Register(props) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0 && password === password2;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleRegister() {
        if (password.length > 4) {
            console.log("Login success!");
        } else alert("Password is too short!")
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setusername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="password2" bsSize="large">
                    <FormLabel>Password again</FormLabel>
                    <FormControl
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Link to="/">
                    <Button block bsSize="large" disabled={!validateForm()} type="submit"
                        onClick={handleRegister}>
                        Register
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default Register;