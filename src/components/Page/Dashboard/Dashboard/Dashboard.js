import React, { useEffect, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import MangeOrders from "../../../mangeOrder/MangeOrder";
import AddNew from "../../AddNew/AddNew";
import MangeReviews from "../../MangeAllReviews/MangeReviews/MangeReviews";
import MangeProducts from "../../MangeProducts/MangeProducts";
import MyOrders from "../../MyOrders/MyOrders";
import AddReviews from "../../MyReviews/AddReviews/AddReviews";
import MyReviews from "../../MyReviews/MyReviews/MyReviews.js";
import Pay from "../../Pay/Pay";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashbaordHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import "./Dashboard.css";


const Dashbaord = () => {
  const { user, logOut } = useAuth()
  let { path, url } = useRouteMatch();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(false);
        } else {
          setIsAdmin(true);
        }
      });
  }, [user?.email]);

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-2 ">
            <div className="dashboard">
              <Link to={url}>
                <h5 className="dashboard-heading">Dashboard</h5>
              </Link>
              <div className="dashboard-all">
                {isAdmin ?
                  <>
                    <Link to={`${url}/myorder`}>
                      <li className="dashboard-menu">My Orders</li>
                    </Link>
                    <Link to={`${url}/pay`}>
                      <li className="dashboard-menu">Payment Option</li>
                    </Link>
                    <Link to={`${url}/addreview`}>
                      <li className="dashboard-menu">Add Review</li>
                    </Link>
                    <Link to={`${url}/myreview`}>
                      <li className="dashboard-menu">My Review</li>
                    </Link>
                  </> :
                 <>
                 <Link to={`${url}/orderslist`}>
                   <li className="dashboard-menu">  Orders list</li>
                 </Link>
                 <Link to={`${url}/allreview`}>
                   <li className="dashboard-menu">  Review list</li>
                 </Link>
                 <Link to={`${url}/addproduct`}>
                   <li className="dashboard-menu">Add Prodcuts</li>
                 </Link>
                 <Link to={`${url}/mangeproducts`}>
                   <li className="dashboard-menu">Manage Cars</li>
                 </Link>
                 <Link to={`${url}/makeAdmin`}>
                   <li className="dashboard-menu">Make Admin</li>
                 </Link>


               </>
               }
               
                <Link to="..">
                  <li className="dashboard-menu logout-dashboard" onClick={logOut}> Logout</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>


              <Route path={`${path}/myorder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/addreview`}>
                <AddReviews></AddReviews>
              </Route>
              <Route path={`${path}/myreview`}>
                <MyReviews></MyReviews>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <AdminRoute path={`${path}/orderslist`}>
                <MangeOrders></MangeOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/allreview`}>
                <MangeReviews></MangeReviews>
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddNew></AddNew>
              </AdminRoute>
              <AdminRoute path={`${path}/mangeproducts`}>
                <MangeProducts></MangeProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>

              <Route path={path}>
                <DashbaordHome></DashbaordHome>
              </Route>


            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;