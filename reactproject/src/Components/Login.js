import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Login(props) {
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
        console.log("To Register view");
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bssize="large">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        autoFocus
                        type="username"
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
                    />
                </FormGroup>
                <Link to="/menu">
                    <Button block bssize="large" disabled={!validateForm()} style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} // type="submit"
                        onClick={handleLogin}>
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button className='mt-3' block bssize="large" style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }} //" type="submit"
                        onClick={handleNewUser}>
                        Register
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default Login;