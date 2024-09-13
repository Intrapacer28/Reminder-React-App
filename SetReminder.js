// MyReminders.js
import React, { useState } from 'react';

const MyReminders = ({ reminders }) => {
  const [showDetails, setShowDetails] = useState(null);

  const handleShowDetails = (reminder) => {
    setShowDetails(reminder);
  };

  const handleCloseDetails = () => {
    setShowDetails(null);
  };

  return (
    <div className="my-reminders-container">
      <h2>My Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id} onClick={() => handleShowDetails(reminder)}>
            {reminder.subject}
          </li>
        ))}
      </ul>

      {showDetails && (
        <div className="reminder-details">
          <h3>{showDetails.subject}</h3>
          <p>Date: {showDetails.date}</p>
          <p>Description: {showDetails.description}</p>
          <p>Email: {showDetails.email}</p>
          <p>Contact No.: {showDetails.contactNo}</p>
          <p>SMS: {showDetails.sms ? 'Yes' : 'No'}</p>
          <p>Recurring for next: {showDetails.recurring} days</p>
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default MyReminders;
