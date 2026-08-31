import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  
  

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");


const handleNameChange = (event) => {
    setName(event.target.value);
  };
    //form submit
    const handleSubmit = (event) => {
      event.preventDefault();
      setError({});
      setSuccess("");
       const newErrors={};

       //name validation

       if(name.trim()===""){
        newErrors.name="Name is required";
       }
       else if(name.trim().length<3){
        newErrors.name="Name must be at least 3 characters long";
       }

        if(mobile.trim()===""){
        newErrors.mobile="Mobile number is required";
       }
       else if(mobile.trim().length<10){
        newErrors.mobile="Mobile number must be at least 10 characters long";
       }
        if(email.trim()===""){
        newErrors.email="Email is required";
       }
       else if(!email.includes("@gmail.com")){
        newErrors.email="Email must be valid";
       }

       if(Age.trim()===""){
        newErrors.age="Age is required";
       }
       else if(isNaN(Age) || Age < 0){
        newErrors.age="Please enter a valid age";
       }
       else {
        Age < 18 ? newErrors.age = "You must be at least 18 years old to register" : null;
       }

      const eligibilityStatus = Age >= 18 ? "Eligible" : "Not eligible";

       
       if(Object.keys(newErrors).length>0){
        setError(newErrors);
        return;
       }

       // success
       setSuccess("Form submitted successfully");

       //show data in browser console
        console.log("Name:", name);
        console.log("Country:", country);
        console.log("Mobile:", mobile);
        console.log("Email:", email);
        console.log("Age", Age);
         console.log("Eligibility:", eligibilityStatus);


         setName("");
        setMobile("");
        setEmail("");
        setCountry("");
        setAge("");
      };
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
       {success&&(
         <div className="success-message">{success}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" value={name} onChange={handleNameChange} />
            {error.name&&(<p style={{ color: "red" }}>{error.name}</p>)}

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

              <input type="text" placeholder="Mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              {error.mobile&&(<p style={{ color: "red" }}>{error.mobile}</p>)}
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {error.email&&(<p style={{ color: "red" }}>{error.email}</p>)}
          </div>
          

          <div className="form-group">
            <label>Age</label>
            <input type="number" placeholder="Enter your Age" value={Age} onChange={(e) => setAge(e.target.value)} />
            {error.age&&(<p style={{ color: "red" }}>{error.age}</p>)}
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;