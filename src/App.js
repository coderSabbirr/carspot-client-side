
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import MangeOrder from './components/mangeOrder/MangeOrder';
import AddNew from './components/Page/AddNew/AddNew';
import Booking from './components/Page/Booking/Booking';
import Home from './components/Page/Home/Home'
import Login from './components/Page/Login/Login';
import MyOrders from './components/Page/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/shared/Header/Header';
import AllPackage from './components/TourPackage/AllPackage';

function App() {
  return (
    <AuthProvider>
       <Router>
       <Header></Header>
     <Route exact path="/">
          <Home></Home>
     </Route>
     <Route exact path="/home">
          <Home></Home>
     </Route>
     <Route exact path="/packages">
          <AllPackage></AllPackage>
     </Route>
     <Route exact path="/addpackage">
          <AddNew></AddNew>
     </Route>
     <PrivateRoute  path="/booking/:bookingId">
          <Booking></Booking>
     </PrivateRoute>
     <PrivateRoute  path="/orders">
          <MyOrders></MyOrders>
     </PrivateRoute>
     <PrivateRoute  path="/mangeorders">
         <MangeOrder></MangeOrder>
     </PrivateRoute>
     <Route  path="/login">
          <Login></Login>
     </Route>
     </Router>
    </AuthProvider>
  );
}

export default App;
