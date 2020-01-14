import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./containers/Login.css";

export default function Login(props) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleLogin() {
        console.log("Click");
    }
    function handleNewUser() {
        console.log("Click");
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
                <Button block bsSize="large" disabled={!validateForm()} type="submit"
                    onClick={handleLogin}>
                    Login
        </Button>
                <Button block bsSize="large" type="submit"
                    onClick={handleNewUser}>Register
                </Button>
            </form>
        </div>
    );
}