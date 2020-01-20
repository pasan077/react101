import React from "react";
import "./App.css";
import Todos from "./components/ToDos";

function App() {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };
  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
