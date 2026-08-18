import { useState } from "react";

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
    <div style={{ width: "400px", margin: "30px auto" }}>
      <h2>Registration Form</h2>

      <label>Name</label>
      <input type="text" placeholder="Enter your name" />

      <br /><br />

      <label>Mobile Number</label>
      <div>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {Object.keys(countries).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Mobile number"
          style={{ width: "200px" }}
        />

        <span> {countries[country]}</span>
      </div>

      <br />

      <label>Email</label>
      <input type="email" placeholder="Enter your email" />

      <br /><br />

      <label>Gender</label>
      <br />

      <input type="radio" name="gender" /> Male
      <input type="radio" name="gender" /> Female

      <br /><br />

      <label>Skills</label>
      <br />

      <input type="checkbox" /> HTML
      <input type="checkbox" /> CSS
      <input type="checkbox" /> React
      <input type="checkbox" /> JavaScript

      <br /><br />

      <label>Address</label>
      <br />

      <textarea placeholder="Enter your address"></textarea>

      <br /><br />

      <button>Submit</button>
    </div>
  );
}

export default App;