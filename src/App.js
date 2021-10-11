import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import User from './components/User'

function App() {
  return (
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

  );
}

export default App;
/* <Login/> */