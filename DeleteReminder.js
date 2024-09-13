// DeleteReminder.js
import React, { useState } from 'react';

const DeleteReminder = () => {
  const [selectedReminder, setSelectedReminder] = useState(null);
  const reminders = []; // Replace with your actual list of reminders

  const handleReminderSelect = (reminder) => {
    setSelectedReminder(reminder);
  };

  const handleDelete = () => {
    // Implement logic to delete the selected reminder
    if (selectedReminder) {
      console.log('Deleting reminder:', selectedReminder);
      // Add code to delete reminder from the list or backend
    }
  };

  return (
    <div className="delete-reminder-container">
      <h2>Delete Reminder</h2>
      <div className="reminder-list">
        <p>Select a reminder to delete:</p>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id} onClick={() => handleReminderSelect(reminder)}>
              {reminder.subject}
            </li>
          ))}
        </ul>
      </div>
      {selectedReminder && (
        <div className="selected-reminder">
          <p>Selected Reminder: {selectedReminder.subject}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DeleteReminder;
