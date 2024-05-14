import { useState } from "react";
import PersonalDetails from "./PersonalDetails";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function MainContent() {
  <Router>
    <Route path="/personal-details" component={PersonalDetails} />
  </Router>;
  const navigate = useNavigate();

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [showForm, setShowForm] = useState(false);

  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const handleCalculateBMI = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleGetStarted = () => {
    navigate("/personal-details");
  };

  return (
    <div className="main-container">
      <h1>Weight Gain</h1>
      <p>
        Weight gain is a common problem for many people. It can be caused by a
        variety of factors, including poor diet, lack of exercise, and genetics.
        If you&apos;re looking to gain weight, there are a few things you can do
        to help increase your calorie intake and build muscle mass. In this
        article, we&apos;ll discuss some tips and tricks for gaining weight in a
        healthy way.
      </p>
      <h1>Let&apos;s gain weight together!</h1>
      <p>
        If you&apos;re looking to gain weight, you&apos;ve come to the right
        place. We offer a variety of services to help you reach your weight gain
        goals, including personalized meal plans, exercise routines, and
        one-on-one coaching. Our team of experts is here to support you every
        step of the way, so you can achieve the results you&apos;ve always
        wanted. Contact us today to get started on your weight gain journey!
      </p>
      <button className="cta-button" onClick={handleGetStarted}>
        Get Started
      </button>
      <button className="cta-button" onClick={handleCalculateBMI}>
        Calculate BMI
      </button>

      {showForm && (
        <form>
          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </form>
      )}

      {bmi && <p>Your BMI is: {bmi}</p>}
      {bmi && <p>BMI Category: {getBMICategory(parseFloat(bmi))}</p>}
    </div>
  );
}

export default MainContent;
