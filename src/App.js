import './App.css';
import Appointment from './pages/appointment/appointment.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home.js"

function App() {
    return (
        // demonstrating vaarious routes
        <Router >

        <Routes >
        <Route exact path = '/'
        exact element = { < Home / > }/> 
         <Route exact path = '/appointment'
        exact element = { < Appointment / > }/>
        <Route exact path = '/appointment/:id'
        exact element = { < Appointment / > }/>
        </Routes >
        </Router>

    );
}

export default App;