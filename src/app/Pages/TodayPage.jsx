import React, { useState } from 'react';
import CheckBox from '../components/CheckBox';

function TodayPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      priority: 'High',
      date: '2024-08-30',
      time: '10:00 AM',
      description: 'Description for Task 1',
    },
    {
      id: 2,
      name: 'Task 2',
      priority: 'Medium',
      date: '2024-08-31',
      time: '11:00 AM',
      description: 'Description for Task 2',
    },
    // Ensure all tasks have unique ids
    // ...
  ]);

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-center">Today</h1>
      <div>
        {tasks.map(task => (
          <CheckBox key={task.id} task={task} onRemove={handleRemoveTask} />
        ))}
      </div>
    </div>
  );
}

export default TodayPage;
