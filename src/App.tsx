import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import About from "./pages/About";
import Navbar from "./component/NavComponent";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetchMembers } from "./hooks/useFetchMembers";

function App() {
  const props = useFetchMembers();

  return (
    <>
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar {...props} />
        <Routes>
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home {...props} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
