import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const{signInUsingGoogle}=useAuth();
    return (
        <div className="text-center mt-5">
            <button className="btn btn-primary " onClick={signInUsingGoogle}>Login with google</button>
        </div>
    );
};

export default Login;