import { useState } from "react";

function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #0f172a)",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ paddingTop: "50px" }}>
        <h1
          style={{
            fontSize: "70px",
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Daily Planner
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "20px",
            marginTop: "-10px",
          }}
        >
          Organize your day beautifully and stay productive.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "40px",
          }}
        >
          <input
            type="text"
            placeholder="Write your next task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              padding: "18px",
              width: "420px",
              borderRadius: "14px",
              border: "1px solid #334155",
              backgroundColor: "#1e293b",
              color: "white",
              fontSize: "16px",
              outline: "none",
            }}
          />

          <button
            onClick={addTask}
            style={{
              padding: "18px 28px",
              border: "none",
              borderRadius: "14px",
              backgroundColor: "#6366f1",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Add Task
          </button>
        </div>

        <div
          style={{
            marginTop: "50px",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          {tasks.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#111827",
                padding: "25px",
                marginBottom: "18px",
                borderRadius: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #1e293b",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  textDecoration: item.completed
                    ? "line-through"
                    : "none",
                  color: item.completed ? "#64748b" : "white",
                }}
              >
                {item.text}
              </h3>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => toggleComplete(item.id)}
                  style={{
                    backgroundColor: "#10b981",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>

                <button
                  onClick={() => deleteTask(item.id)}
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        Made using React
      </footer>
    </div>
  );
}

export default Home;