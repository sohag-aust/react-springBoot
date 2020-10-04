import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListClientComponent from './components/ListClientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateClientComponent from './components/CreateClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';
import LoginComponent from './components/LoginComponent';


function App() {
  return (

      <div>
        <Router>
          
            <HeaderComponent/>

            <div className="container">
              <Switch> 
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/clients" exact component={ListClientComponent}></Route>
                <Route path="/client" exact component={CreateClientComponent}></Route>
                <Route path="/client/:id" exact component={UpdateClientComponent}></Route>
                <Route path="/view-client/:id" exact component={ViewClientComponent}></Route>
              </Switch>
            </div>

            <FooterComponent/>
          
        </Router>
      </div>
    
  );
}

export default App;
