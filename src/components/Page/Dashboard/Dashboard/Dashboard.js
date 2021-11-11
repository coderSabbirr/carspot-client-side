import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import MyOrders from "../../MyOrders/MyOrders";
import "./Dashboard.css";
// import AddServices from "./../AddServices/AddServices";
// import Review from "./../Review/Review";
// import MyBookings from "./../MyBookings/MyBookings";
// import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// import ManageServices from "./../ManageServices/ManageServices";
// import useFirebase from "./../../Hook/useFirebase";

const Dashbaord = () => {
  const {user,logOut}=useAuth()
  let { path, url } = useRouteMatch();
  //   const { user } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data[0]?.role === "admin") {
  //           setIsAdmin(true);
  //         } else {
  //           setIsAdmin(false);
  //         }
  //       });
  //   }, [user?.email]);
  console.log(isAdmi);
  console.log()
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5 className="dashboard-heading">Dashboard</h5>
              <div className="dashboard-all">
                <Link to={`${url}/orders`}>
                  <li className="dashboard-menu ">My Orders</li>
                </Link>
                <Link to={`${url}/review`}>
                  <li className="dashboard-menu ">Review</li>
                </Link>
                <div className="admin-dashboard">
                  <Link to={`${url}/orderslist`}>
                    <li className="dashboard-menu ">Orders list</li>
                  </Link>
                  <Link to={`${url}/addproduct`}>
                    <li className="dashboard-menu">Add Prodcuts</li>
                  </Link>
                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                  <Link to={`${url}/manageServices`}>
                    <li className="dashboard-menu">Manage Service</li>
                  </Link>
                </div>
                <Link>
                <li className="dashboard-menu btn btn-primary"  onClick={logOut}> Logout</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/orders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}`}>

              </Route>
              {/* 
            
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route> */}
            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;