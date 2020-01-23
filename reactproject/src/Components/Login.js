import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Components/Pictures/cluster_logo.svg';

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
            password: password,
            mess: "find"
        }
        data = await fetch(
            "http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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


    return (
        <div className="Login">
            <div><h1 className="mb-4 login_header" styles={{color: 'red'}}>Clusterin Limsamaatti</h1></div>
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
                    <Button block bssize="large" disabled={!validateForm()} style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} type="submit"
                        onClick={handleLogin}>
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button className='mt-3' block bssize="large" style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} type="submit"
                    //onClick={handleNewUser}
                    >
                        Register
                    </Button>
                </Link>
                <div>
                    <img src={logo} className="meidan_logo" alt="logo" /*styles={{ position: 'absolute', right: '20%' }}*/ />
                </div>
            </form>

        </div>
    );
}

export default withRouter(Login);