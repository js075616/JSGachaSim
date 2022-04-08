import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "../src/components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Cards />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
