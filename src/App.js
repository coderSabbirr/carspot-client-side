
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import MangeOrder from './components/mangeOrder/MangeOrder';
import AddNew from './components/Page/AddNew/AddNew';
import Booking from './components/Page/Booking/Booking';
import Home from './components/Page/Home/Home'
import Login from './components/Page/Login/Login';
import MyOrders from './components/Page/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import AllPackage from './components/TourPackage/AllPackage';
import NotFound from './components/Page/NotFound/NotFound'

function App() {
  return (
    <AuthProvider>
       <Router>
       <Header></Header>
     <Switch>
    < Route exact path="/">
          <Home></Home>
     </Route>
     <Route exact path="/home">
          <Home></Home>
     </Route>
     <Route exact path="/packages">
          <AllPackage></AllPackage>
     </Route>
     <PrivateRoute exact path="/addpackage">
          <AddNew></AddNew>
     </PrivateRoute>
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
     <Route  path="*">
          <NotFound></NotFound>
     </Route>
     </Switch>
     <Footer></Footer>
     </Router>
    </AuthProvider>
  );
}

export default App;
