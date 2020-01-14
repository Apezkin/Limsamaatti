import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../Login.css";
import {Link} from "react-router-dom";

function Login(props) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    const handleLogin = (async event => {
        event.preventDefault();
        let data, jsonData;
        const bodyData = {
            username: username,
            password: password
        }
        data = await fetch(
            "http://localhost:3001/users", {
                method: "GET",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyData)
            }
        );

        if (data === "fail") {
            console.log("fail");
        } else {
            jsonData = await data.json();
            console.log(jsonData);
        }
    })

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="username"
                        name="username"
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
                        name="password"
                    />
                </FormGroup>
                <Link to="/menu">
                    <Button block bsSize="large" disabled={!validateForm()} type="submit"
                    onClick={handleLogin}>
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button block bsSize="large" type="submit">
                        Register
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default Login;