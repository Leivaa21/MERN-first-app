import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import Noteslist from './components/Noteslist'
import CreateTask from './components/CreateTask'
import CreateNote from './components/CreateNote'
function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path="/" exact component={Noteslist}/>
        <Route path="/edit/:id" component={CreateNote}/>
        <Route path="/newNote" component={CreateNote}/>
        <Route path="/tasklist" component={CreateTask}/>
      </div>
    </Router>
  );
}

export default App;
