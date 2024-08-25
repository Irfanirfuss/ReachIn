// LoginPage.js
import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch(
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
        );
        console.log(response);

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            console.log(data.token);
            // navigate("Home");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
