import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import PollPage from './components/pages/PollPage';
import Leaderboard from './components/pages/Leaderboard';
import AddPoll from './components/pages/AddPoll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';



import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleInitialData } from './redux/actions/index';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Route path='/login' component={Login} />
        <div>
          <PrivateRoute component={Header} />
          <Switch>
            <PrivateRoute path='/' exact component={Home} />
            <PrivateRoute path='/leaderboard' component={Leaderboard} />
            <PrivateRoute path='/addquestion' component={AddPoll} />
            <PrivateRoute path='/questions/:id' component={PollPage} />
          </Switch>
        </div>
      </div>
    </Router>

  );
};

export default App;
