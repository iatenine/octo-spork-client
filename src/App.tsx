import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Navbar from "./component/NavComponent";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetchMembers } from "./hooks/useFetchMembers";

function App() {
  const { members, stateCode, setStateCode, district, setDistrict } =
    useFetchMembers();

  return (
    <>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar />
        <Routes>
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <Home
                members={members}
                stateCode={stateCode}
                setStateCode={setStateCode}
                district={district}
                setDistrict={setDistrict}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
