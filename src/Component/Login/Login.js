import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAugh';

const Login = () => {
    // user data pus auth compo 2
    const {singInUserGoogle, signInUserGithub} = useAuth();
    return (
        <div>
            <h3>Please Login</h3>
            <button className="btn btn-success m-2" onClick={singInUserGoogle} >Google Sign-In</button>
            <button className="btn btn-success m-2" onClick={signInUserGithub} >Github Sign-In</button>
            <br />
            <Link  to="/register">New user?</Link>
        </div>
    );
};

export default Login;