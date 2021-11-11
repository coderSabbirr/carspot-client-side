
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import AllProducts from './components/Page/AllProducts/AllProducts/AllProducts';
import Booking from './components/Page/Booking/Booking';
import Dashboard from './components/Page/Dashboard/Dashboard/Dashboard';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';
import Register from './components/Page/Login/Register/Register';
import NotFound from './components/Page/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
function App() {
     return (
         <div className="App">
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
                         <Route exact path="/products">
                              <AllProducts></AllProducts>
                         </Route>
                         
                         <PrivateRoute path="/dashboard">
                              <Dashboard></Dashboard>
                         </PrivateRoute>
                         <PrivateRoute path="/booking/:bookingId">
                              <Booking></Booking>
                         </PrivateRoute>
                         <Route path="/login">
                              <Login></Login>
                         </Route>
                         <Route path="/register">
                              <Register></Register>
                         </Route>

                         <Route path="*">
                              <NotFound></NotFound>
                         </Route>
                    </Switch>
                    <Footer></Footer>
               </Router>
          </AuthProvider>
         </div>
     );
}

export default App;
