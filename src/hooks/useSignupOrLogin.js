import { useState } from 'react';
import {  useLocation } from "react-router-dom";
import { BASE_URL } from "../api";

export function useSignupOrLogin() {
    const { pathname } = useLocation();
    const signupOrLogin = pathname.slice(1);
    const [form, setForm] = useState({username: "", password: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch(`${BASE_URL}/users/${
                "login" ? "register" : "login"
            }`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({ user: form }),
            }
            );

        };
        
    const formFields = [
        {
            type: "text",
            name: "username",
            label: signupOrLogin === "signup" ? "Choose username" : "Username",
            value: form.username,
        },
        {
            type: "password",
            name: "password",
            label: signupOrLogin === "signup" ? "Choose password" : "Password",
            value: form.password,
    },
    ];
        
    return {
        h1: "signup" ? "Register Account" : "Login",
        handleSubmit,
        handleChange,
        formFields,
    };
        }