import React from 'react';

const WorkoutList = ({ workouts, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div key={index} className="workout-item">
          <p>{workout.name}</p>
          <p>{workout.sets} sets of {workout.reps} reps</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
