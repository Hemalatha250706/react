import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("India");

  const countries = {
    India: "+91",
    USA: "+1",
    UK: "+44",
    Australia: "+61",
    Canada: "+1",
  };

  return (
    <div className="page">
      <div className="form-container">
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Fill in your details to register</p>
        </div>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <div className="mobile-box">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {Object.keys(countries).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <span className="code">{countries[country]}</span>

              <input type="text" placeholder="Mobile number" />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Gender</label>

            <div className="options">
              <label>
                <input type="radio" name="gender" />
                Male
              </label>

              <label>
                <input type="radio" name="gender" />
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Skills</label>

            <div className="options skills">
              <label>
                <input type="checkbox" />
                HTML
              </label>

              <label>
                <input type="checkbox" />
                CSS
              </label>

              <label>
                <input type="checkbox" />
                React
              </label>

              <label>
                <input type="checkbox" />
                JavaScript
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address"></textarea>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;