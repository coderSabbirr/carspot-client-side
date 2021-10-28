
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/context/AuthProvider';
import Home from './components/Page/Home/Home'
import Login from './components/Page/Login/Login';
import Header from './components/shared/Header/Header';

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
     <Route exact path="/login">
          <Login></Login>
     </Route>
     </Router>
    </AuthProvider>
  );
}

export default App;
