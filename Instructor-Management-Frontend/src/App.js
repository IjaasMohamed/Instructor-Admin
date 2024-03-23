import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import {InstructorList} from './components/instructor/instructor-list.component'
import {CreateInstructor} from './components/instructor/instructor-add.component'
import EditInstructor from './components/instructor/instructor-edit.component'

// Removed imports for Payment and Feedback components

import {InstructorDetails} from './components/instructor/instructor-details.component'
import Home from './components/home.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>

        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/instructor" element = {<InstructorList/>}/>
        <Route exact path = "/creatInstructor" element = {<CreateInstructor/>}/>
        <Route exact path = "/editInstructor/:id" element = {EditInstructor}/>

        {/* Removed routes for Payment and Feedback components */}

        <Route exact path = "/idetails/:id" element = {<InstructorDetails/>}/>

        </Routes>
      </Router>

    </div>
  );

}

export default App;
