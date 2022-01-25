import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Upnavbar from './components/Upnavbar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register2 from './pages/Register2';
import React from 'react';
import Profile from './pages/Profile';

function App() { 
  let token = sessionStorage.getItem('token');
  let initialState = (token !== null && token !== undefined);
  let [logged, setLogged] = React.useState(initialState);

  return (
    <div className="App">
      <Router>
        <Upnavbar logged={logged} setLogged={setLogged}></Upnavbar>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={()=><Login setLogged={setLogged}></Login>}/>
          <Route path="/register" exact component={Register2}/>
          <PrivateRoute authed={typeof token == "string"} path="/profile" exact component={Profile}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
