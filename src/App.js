import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState('none');
  const [height, setHeight] = useState('none');
  const [bmi, setBmi] = useState("");
  const [massage, setMessage] = useState("");

  //logic
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter valid weight and height");
    } 
    else {
      let bmi = (weight / (height * height)) * 703;
    setBmi(bmi.toFixed(1));

    if (bmi < 25) {
      setMessage("your are underweight");
    }

    else if (bmi >= 25 && bmi < 30) {
      setMessage("you are healthy ");
    } 
    else {
      setMessage("You're overweight");
    }
  }
  };

  //reload

  let reload = () => {
    window.location.reload();
  };




  return (
    <div className="App">
      
      <div className="container">
        <h1>BMI Calculater</h1>
        <form onSubmit={calcBmi}>
          <div className="field">
            <label> Weight (ibs) </label>
            <input
              type="number"
              id="weight"
              required
              placeholder="..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="field">
            <label> Height (in) </label>
            <input
              type="number"
              id="height"
              required
              placeholder="..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="btn-group">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{massage}</p>
          </div>
        </form>
      </div>
    </div>
  
  
  );
}

export default App;
