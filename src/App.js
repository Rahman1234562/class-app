import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // c = "rehman"    //don't need to declare we use .this here
  render() {
    return (
      <div>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={6} country="us" category="general" /> } />
            <Route exact path="business" element= {<News key="business" pageSize={6} country="us" category="business" /> }/>
            <Route exact path="entertainment" element= {<News key="entertainment" pageSize={6} country="us" category="entertainment" /> }/>
            <Route exact path="general" element= {<News key="" pageSize={6} country="us" category="general" /> }/>
            <Route exact path="health" element= {<News key="general" pageSize={6} country="us" category="health" /> }/>
            <Route exact path="sciences" element= {<News key="sciences" pageSize={6} country="us" category="sciences" /> }/>
            <Route exact path="sports" element= {<News key="sports" pageSize={6} country="us" category="sports" /> }/>
            <Route exact path="technology" element= {<News key="technology" pageSize={6} country="us" category="technology" /> }/>
          </Routes>
        </Router>
      </div>
    );
  }
}
