import React from 'react';
import Users from './components/users/Users';
import Navbar from './components/partials/Navbar';
import Useritem from './components/users/Useritem';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <div className="contrainer mt-2">
          {/* <Users/> */}
          <Switch>
            <Route exact path='/users' component={Users} />
            <Route exact path='/users/:login' component={Useritem} />
            <Route exact component={Users} />

          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
