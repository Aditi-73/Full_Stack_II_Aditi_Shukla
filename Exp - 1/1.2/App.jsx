import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Simple To-Do List SPA</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter a task..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "1rem",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Task
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "100%",
        }}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                padding: "5px 15px",
                fontSize: "0.9rem",
                cursor: "pointer",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p style={{ color: "#999", marginTop: "20px" }}>
          No tasks yet. Add one above!
        </p>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);
