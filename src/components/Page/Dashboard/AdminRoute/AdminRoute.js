import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
const [isAdmin, setIsAdmin] =useState(true);

useEffect(() => {
    fetch(`https://boiling-meadow-81562.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
         
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  
  
 
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;