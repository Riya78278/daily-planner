function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e1e2f",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Task Scheduler</h2>

      <div>
        <button style={{ marginRight: "10px" }}>Home</button>
        <button>Tasks</button>
      </div>
    </nav>
  );
}

export default Navbar;