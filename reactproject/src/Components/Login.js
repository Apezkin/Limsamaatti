import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {withRouter, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
=======
//import * as bt from "../Login.css"; 
import * as bt from 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
>>>>>>> parent of 257970e... logout styling
=======
//import * as bt from "../Login.css"; 
import * as bt from 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
>>>>>>> parent of 257970e... logout styling
=======
//import * as bt from "../Login.css"; 
import * as bt from 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
>>>>>>> parent of 257970e... logout styling

function Login(props) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
<<<<<<< HEAD
    const handleLogin = (async event => {
        event.preventDefault();
        let data, jsonData;
        const bodyData = {
            username: username,
            password: password,
            mess: "find"
        }
        data = await fetch(
            "http://localhost:3001/users", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(bodyData)
            }
        );
        jsonData = await data.json();

        if (jsonData === "fail") {
            console.log("fail");
        } else {
            props.setUser(jsonData);
            props.history.push("/menu");
        }
    })
=======
    function handleLogin() {
        console.log("Click");
    }
    function handleNewUser() {
        console.log("Click");
    }
>>>>>>> parent of 5e245f3... console text change

    return (
        <div className="Login">
            <h1>{props.wow}</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bssize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="username"
                        name="username"
                        value={username}
                        onChange={e => setusername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bssize="large" //.styled__control-is-focused. 
                    ><FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        name="password"
                    />
                </FormGroup>

                <Link to="/menu">
                    <Button block bssize="large" disabled={!validateForm()} style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} // type="submit"
                        onClick={handleLogin}>
                        Login
                    </Button>
                </Link>
                <Link to="/register">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <Button className='mt-3' block bssize="large" style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} //" type="submit"
                        //onClick={handleNewUser}
                        >

=======
=======
>>>>>>> parent of 257970e... logout styling
=======
>>>>>>> parent of 257970e... logout styling
                    <Button className='mt-3' block bssize="large" type="submit"
                        onClick={handleNewUser}>
>>>>>>> parent of 257970e... logout styling
                        Register
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default withRouter(Login);