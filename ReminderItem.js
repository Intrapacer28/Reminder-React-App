// ReminderItem.js
import React from 'react';

const ReminderItem = ({ reminder, onSelectReminder }) => (
  <li onClick={() => onSelectReminder(reminder)}>
    {reminder.subject}
  </li>
);

export default ReminderItem;
