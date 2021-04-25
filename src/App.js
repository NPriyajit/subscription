import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/adminlogin" component={AdminLogin}/>
        <Route path="/myaccount" component={MyAccount}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
