import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const{signInWithGoogle,loginUser,isLoading }=useAuth();
   
    const location = useLocation();
    const history = useHistory();



const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location, history);
    
    e.preventDefault();
    
}


const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
}
    
  
    return (
        <Container className="text-center ">
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            {isLoading && <CircularProgress />}
                <Typography variant="body1" gutterBottom>Please Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                            <br/>
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {/* {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} */}
                </form>
                <p>----------or-----------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
         
        </Grid>
    </Container>
    );
};

export default Login;