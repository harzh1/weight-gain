import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./MainContent";
import PersonalDetails from "./PersonalDetails";
import DataFirstSet from "./DataFirstSet";
import DataSecondSet from "./DataSecondSet";
import DataThirdSet from "./DataThirdSet";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/data-first-set" element={<DataFirstSet />} />
          <Route path="/data-second-set" element={<DataSecondSet />} />
          <Route path="/data-third-set" element={<DataThirdSet />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
