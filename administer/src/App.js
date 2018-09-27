import React, { Component } from 'react';
import $ from "jquery"
import "./assets/css/header.css"
import Login from "./pages/login"
import Index from "./pages/index"
import AdminWord from "./pages/adminWord"
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact path="/" component={ Login } />
              <Route path="/index" component={ Index } />
              <Route path="/adminword" component={ AdminWord } />
          </div>
        </Router>
    );
  }
}

export default App;
