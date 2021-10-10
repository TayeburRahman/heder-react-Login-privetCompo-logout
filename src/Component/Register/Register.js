import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    // user data pus auth compo 3
    return (
        <div>
            <h3>Please Login</h3>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="password" />

            </form>
            <Link  to="/login">Allredy Registered?</Link>
        </div>
    );
};

export default Register;