import React, { useState } from "react";
import Footer from './Footer';
import '../App.css';

const Message = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true while the request is being processed

    try {
      // Send POST request to the backend API
      const response = await fetch('https://portfolio-backend-625e.onrender.com/api/v1/message/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the response is successful, directly show success alert
        alert('Message sent successfully!'); // Show success alert
        setFormData({ firstName: '', lastName: '', message: '' }); // Reset form
      } else {
        // If there is an error with the request
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      // Catch any other errors
      alert('An error occurred while sending the message.');
    } finally {
      setLoading(false);  // Set loading to false after the request is complete
    }
  };

  return (
    <div className="main-container">
      <div className="page-container">
        {/* Card Container with custom background color */}
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#212529' }}>
          <div className="card-header text-center" style={{ backgroundColor: '#155e45', color: '#212529', borderRadius: '8px' }}>
            <h3>Enter Your Message</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Row for First Name and Last Name */}
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{ backgroundColor: '#f0f8ff' }} // background color for the input box
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{ backgroundColor: '#f0f8ff' }} // background color for the input box
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="form-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  style={{ backgroundColor: '#f0f8ff' }} // background color for the textarea
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn custom-btn btn-block" disabled={loading}>
                {loading ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Message;
