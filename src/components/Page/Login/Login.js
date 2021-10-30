import React, { useState } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const{signInUsingGoogle,setError}=useAuth();
   
    const location = useLocation();
    const history = useHistory();
    const redirect_uri= location.state?.from || '/home'

    const handalGoogleLogin = () => {
       
        signInUsingGoogle()
        .then(result=> {
        history.push(redirect_uri);
})
.catch(error=>{
    setError("popup-closed you");
  })
  
    }
    
    return (
        <div className="text-center mt-5">
            <button className="btn btn-primary " onClick={handalGoogleLogin}>Login with google</button>
        </div>
    );
};

export default Login;