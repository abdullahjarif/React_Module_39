import { useState } from "react";

export default function ShowHideApp() {
  const [isVisible, setVisible] = useState("");

  const handleToggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="card">
      <h2>Show/Hide App</h2>
      <h3>
        {isVisible && (
          <p
            style={{
              fontSize: "20px",
              color: "green",
            }}
          >
            Hello, React Learner!
          </p>
        )}
      </h3>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "3px solid blue",
            backgroundColor: "lightblue",
            color: 'black',
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={handleToggle}
        >
          {isVisible ? "Show" : "Hide"} Text
        </button>
      </div>
    </div>
  );
}
