import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>

        <Router>

        <Navbar />
          

        <Routes>
          <Route exact path="/" element={<News pageSize={9} country= 'in' category='general' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={9} country= 'in' category='business' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>   
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country= 'in' category='entertainment' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={9} country= 'in' category='general' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>   
          <Route exact path="/health" element={<News key="health" pageSize={9} country= 'in' category='health' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={9} country= 'in' category='science' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route> 
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country= 'in' category='sports' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country= 'in' category='technology' apiKey='2492d27b405f4e4ba6b250bed0a238a2'/>}></Route>               
        </Routes>

        </Router>

      </div>
    );
  }
}
