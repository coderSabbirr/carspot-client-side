import React from 'react';
import notFound from './notFound.svg'
import './notFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notFound} alt="" /><br/>
            <Link className="btn btn-primary mt-5" to="/home">Back To Home</Link>
        </div>
    );
};

export default NotFound;