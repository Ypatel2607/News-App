import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <Router> 
      <div>
        <div className="app">
        <NavBar />
        </div>
        <div>
        <LoadingBar color='#f11946' progress={progress} height={3} />
        </div>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general"/>}></Route>
          {/* <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="top" pageSize={pageSize} country={country} category="top"/>}></Route> */}
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports"/>}></Route>
          <Route exact path="/tech" element={<News setProgress={setProgress} apiKey={apiKey} key="tech" pageSize={pageSize} country={country} category="tech"/>}></Route>
          
          <Route exact path="/politics" element={<News setProgress={setProgress} apiKey={apiKey} key="politics" pageSize={pageSize} country={country} category="politics"/>}></Route>
          <Route exact path="/food" element={<News setProgress={setProgress} apiKey={apiKey} key="food" pageSize={pageSize} country={country} category="food"/>}></Route>
          {/* <Route exact path="/environment" element={<News setProgress={setProgress} apiKey={apiKey} key="environment" pageSize={pageSize} country={country} category="environment"/>}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;