import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/AddContact';
import EditContact from './components/contacts/EditContact';
import {Provider} from './Context';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import Contact from './components/contacts/Contact';

class App extends Component{
render(){
  return (
    <Provider>
     <Router>
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact/Add" component={AddContact} />
          <Route exact path="/contact/edit/:id" component={EditContact} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
          
        </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}
}
export default App;
