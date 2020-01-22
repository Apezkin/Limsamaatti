import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../Login.css";
import { Link } from "react-router-dom";


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

    const register = async () => {
        const bodyData = {
            username: username,
            password: password,
            mess: "new"
        }

        await fetch(
            "http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        }
        );
    }

    function handleRegister() {
        if (password.length > 4) {
            // console.log("Login success!");
            register();
            if (1) {console.log("true"); alert("Registeration successfull!") } else { alert("Registeration fail") }
        } else alert("Password is too short!")
    }
    function handleBack() {
        console.log("Back to login screen");
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
                <FormGroup controlId="password" bssize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="password2" bssize="large">
                    <FormLabel>Password again</FormLabel>
                    <FormControl
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Link to="/">
                    <Button block bssize="large" disabled={!validateForm()} style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }}
                        onClick={handleRegister}>
                        Register
                    </Button>
                </Link>
                <Link to="/">
                    <Button className='mt-3' block bssize="large" style={{ backgroundColor: 'red', color: 'black', borderColor: 'red' }}
                        onClick={handleBack}>
                        Back to login
                    </Button>
                </Link>
            </form>
        </div>
    );
}

export default Register;