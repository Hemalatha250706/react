import React, { useState } from 'react';

function StudentsForm(props) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });

 
  const [submittedData, setSubmittedData] = useState(null);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData(formData); 
  };

  return (
    <div>
      <h1> Student Form </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br /><br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br/><br/>
        <label>
          Phone number:
          <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br/><br/>  
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

     
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Submitted Details:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default StudentsForm;
