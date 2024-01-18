import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/work" element={<Work/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
