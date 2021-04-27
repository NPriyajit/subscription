import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import MyAccount from "./components/MyAccount";
import Register from "./components/Register";
import axios from "axios";
import Subscribe from "./components/Subscribe";
import AdminRegister from "./components/AdminRegister";


export const userApi = axios.create({
  baseURL: "http://localhost:4000/",
});

export const adminApi= axios.create({
  baseURL:"http://localhost:4000/admin/"
})

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/adminlogin' component={AdminLogin} />
          <Route path='/myaccount' component={MyAccount} />
          <Route path='/register' component={Register} />
          <Route path='/adminhome' component={AdminHome} />
          <Route path='/learnmore' component={Subscribe} />
          <Route path='/adminregister' component={AdminRegister} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
