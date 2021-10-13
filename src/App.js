import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './components/pages/Home'
// import Login from './components/pages/Login'
// import Signup from './components/pages/Signup';
// import { AuthProvider } from './context/AuthContext';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute';
// import ForgotPassword from './components/pages/ForgotPassword';
// import UpdateProfile from './components/pages/UpdateProfile';
// import User from './components/pages/User'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <Nav />
    </div>    
  );
}

export default App;
/* 

<Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRoute path='/' exact component={Home} />
            <PrivateRoute path='/user' exact component={User} />
            <PrivateRoute path='/update-profile' exact component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>


<Login/> */