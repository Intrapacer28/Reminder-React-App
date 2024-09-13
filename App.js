// App.js
import React, { useState } from 'react';
import SetReminder from './SetReminder';
import MyReminders from './MyReminders';
import ReminderItem from './ReminderItem';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([]);
  const [selectedReminder, setSelectedReminder] = useState(null);

  const handleSetReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };

  const handleSelectReminder = (reminder) => {
    setSelectedReminder(reminder);
  };

  const handleDeleteReminder = () => {
    if (selectedReminder) {
      setReminders(reminders.filter((reminder) => reminder.id !== selectedReminder.id));
      setSelectedReminder(null);
    }
  };

  // ... Other handlers remain the same ...

  return (
    <div className="App">
      <div className="App-content">
        <SetReminder onSetReminder={handleSetReminder} />
        <MyReminders reminders={reminders} onSelectReminder={handleSelectReminder} />
        {selectedReminder && (
          <div className="selected-reminder-details">
            <h3>{selectedReminder.subject}</h3>
            <button onClick={handleDeleteReminder}>Delete Reminder</button>
            {/* ... Other buttons ... */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;