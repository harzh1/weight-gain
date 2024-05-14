import DataFirstSet from "./DataFirstSet";
import DataSecondSet from "./DataSecondSet";
import DataThirdSet from "./DataThirdSet";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function PersonalDetails() {
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <h1>Personal Details</h1>
      <form className="details-form">
        <label htmlFor="age">Age:</label>
        <div className="age">
          <button
            className="details-btn"
            type="button"
            value="15-25"
            onClick={() => navigate("/data-first-set")}
          >
            15-25
          </button>
          <button
            className="details-btn"
            type="button"
            value="25-40"
            onClick={() => navigate("/data-second-set")}
          >
            25-40
          </button>
          <button
            className="details-btn"
            type="button"
            value="40+"
            onClick={() => navigate("/data-third-set")}
          >
            40+
          </button>
        </div>

        <label htmlFor="gender">Gender:</label>
        <div className="gender">
          <button className="details-btn" type="button" value="male">
            Male
          </button>
          <button className="details-btn" type="button" value="female">
            Female
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
