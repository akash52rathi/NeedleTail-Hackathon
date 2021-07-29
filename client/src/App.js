import React, {Fragment} from 'react'
import Navbar from './component/layout/Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Home} from './component/pages/Home'
import {About} from './component/pages/About'
import ContactState from './context/contact/contactState'
import AuthState from './context/auth/AuthState'
import './App.css';
import Register from './component/auth/register'
import LogIn from './component/auth/login'
import Alerts from './component/layout/Alerts';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './component/routing/PrivateRoute'
import { AccountDetail }   from './component/pages/AccountDetail';
import { BanksDetail } from './component/pages/BanksDetail';
import { Payment } from './component/pages/Payment';

if(localStorage.token)
{
    setAuthToken(localStorage.token);
}


const App = ()=> {
  return (

    <AuthState>
    <ContactState>
    <AlertState>

    <Router>
    <Fragment>
      <Navbar/>
    <div className="container">
    <Alerts />
      <Switch>
          
      <PrivateRoute exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/register" component={Register}/>
      <Route exact path ="/login" component={LogIn}/>
      <Route exact path ="/AccountDetail" component={AccountDetail}/>
      <Route exact path ="/BanksDetail" component={BanksDetail}/>
      <Route exact path ="/Banks/:id" component={Payment}/>            
      </Switch>
      
    </div>
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
