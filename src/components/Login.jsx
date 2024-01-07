import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as auhtLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
useDispatch;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return <div>Login</div>;
}

export default Login;
