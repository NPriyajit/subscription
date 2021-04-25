import './App.css';
import Plan from './components/Plan';
import Home from './components/Home';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
function App() {
  return (
    <div className="App">
      <Home/>
      <Plan/>
      <Login/>
      <AdminLogin/>
    </div>
  );
}

export default App;
