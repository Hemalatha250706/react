import { useState } from "react";
import "./App.css";

function App() {
  //state
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");


  //arrow function

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
       else if(!email.includes("@")){
        newErrors.email="Email must be valid";
       }

        if(gender.trim()===""){
        newErrors.gender="Gender is required";
       }
       
       if(skills.length===0){
        newErrors.skills="At least one skill is required";
       }
      
      if(address.trim()===""){
        newErrors.address="Address is required";
       }
        else if(address.trim().length<10){
          newErrors.address="Address must be at least 10 characters long";
        }

       
      //show error
     
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
        console.log("Gender:", gender);
        console.log("Skills:", skills);
       console.log("Address:", address);
        //clear form

        setName("");
        setMobile("");
        setEmail("");
        setGender("");
        setSkills([]);
        setAddress("");
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
            <label>Gender</label>

            <div className="options">
              <label>
                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                Male
              </label>

              <label>
                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                Female
              </label>
            </div>
            {error.gender&&(<p style={{ color: "red" }}>{error.gender}</p>)}
          </div>

          <div className="form-group">
            <label>Skills</label>

            <div className="options skills">
              <label>
                <input type="checkbox" value="HTML" checked={skills.includes("HTML")} onChange={(e) => {
                  if(e.target.checked){
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter(skill => skill !== e.target.value));
                  }
                }} />
                HTML
              </label>

              <label>
                <input type="checkbox" value="CSS" checked={skills.includes("CSS")} onChange={(e) => {
                  if(e.target.checked){
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter(skill => skill !== e.target.value));
                  }
                }} />
                CSS
              </label>

              <label>
                <input type="checkbox" value="React" checked={skills.includes("React")} onChange={(e) => {
                  if(e.target.checked){
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter(skill => skill !== e.target.value));
                  }
                }} />
                React
              </label>

              <label>
                <input type="checkbox" value="JavaScript" checked={skills.includes("JavaScript")} onChange={(e) => {
                  if(e.target.checked){
                    setSkills([...skills, e.target.value]);
                  } else {
                    setSkills(skills.filter(skill => skill !== e.target.value));
                  }
                }} />
                JavaScript
              </label>
            </div>
            {error.skills&&(<p style={{ color: "red" }}>{error.skills}</p>)}
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
            {error.address&&(<p style={{ color: "red" }}>{error.address}</p>)}
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;