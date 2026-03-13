// App.js

import React, { useState } from 'react';
import './App.css';
// import House from "./House";
const App = () => {
  const [exercises, setExercises] = useState({
    Monday: ['Pushups', 'Squats', 'Crunches'],
    Tuesday: ['Lunges', 'Bench Press', 'Planks'],
    Wednesday: ['Deadlifts', 'Leg Press', 'Russian Twist'],
    Thursday: ['Bicep Curls', 'Shoulder Press', 'Calf Raises'],
    Friday: ['Pull-ups', 'Dips', 'Leg Raises'],
    Saturday: ['Exercise1', 'Exercise2', 'Exercise3'], 
    Sunday: ['Exercise1', 'Exercise2', 'Exercise3'], 
  });

  const addExercise = (day) => {
    const exercise = prompt('Enter exercise:');
    if (exercise) {
      const updatedExercises = { ...exercises };
      updatedExercises[day] = [...exercises[day], exercise];
      setExercises(updatedExercises);
    }
  };

  const deleteExercise = (day, index) => {
    const updatedExercises = { ...exercises };
    updatedExercises[day].splice(index, 1);
    setExercises(updatedExercises);
  };

  return (

    <div className="container">
      {/* <House/> */}
     <h1>Personal Workout Planner</h1>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Exercises</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(exercises).map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              <td>
                <ul className="exercise-list">
                  {exercises[day].map((exercise, exerciseIndex) => (
                    <li key={exerciseIndex}>
                      {exercise}
                      <span
                        className="delete-btn"
                        onClick={() => deleteExercise(day, exerciseIndex)}
                      >
                        ❌
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <button className="add-exercise-btn" onClick={() => addExercise(day)}>
                  Add Exercise
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;