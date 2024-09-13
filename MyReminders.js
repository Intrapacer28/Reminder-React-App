// MyReminders.js
import React from 'react';
import ReminderItem from './ReminderItem';

const MyReminders = ({ reminders, onSelectReminder }) => {
  return (
    <div className="my-reminders-container">
      <h2>My Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <ReminderItem key={reminder.id} reminder={reminder} onSelectReminder={onSelectReminder} />
        ))}
      </ul>
    </div>
  );
};

export default MyReminders;