import { useForm } from "react-hook-form";
import { useState } from "react";
import './loginform.css'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { apiDomain } from "../utils/utils";

//using Redux
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";


export default function LoginForm() {
    const dispatch = useDispatch();
    // const [username, setName] = useState('');
    // const [token, setToken] = useState('');


    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        axios.post(`${apiDomain}/auth/login`, data)
            .then(({ data }) => {
                if (data.token) {

                    dispatch(login({username: data.username, token: data.token}));
                    navigate("/todos")
                }
            }).catch(({ response }) => {

                alert(response?.data.error)
            });
    };

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     // without API
    //     // dispatch(login({username, token}));
      
    //   }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" >
            <p className="loginBanner"> Login Page</p>
            <>
                <input type="text" placeholder="Username" {...register("username")} />
                <p>{errors.username?.message}</p>
            </>
            <>
                <input type="password" placeholder="Password..." {...register("password")} />
                <p>{errors.password?.message}</p>
            </>

            <input className="submitBtn" type="submit" value="Submit" />
        </form>
    )
}
