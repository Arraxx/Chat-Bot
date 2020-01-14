import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import About from './components/About';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
