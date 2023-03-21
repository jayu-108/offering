// import './App.css';

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Join from "./components/Join";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/join" element={<Join />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
