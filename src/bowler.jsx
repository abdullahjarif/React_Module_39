import { useState } from "react";

export default function Bowler() {
  const [ball, setBall] = useState(0);
  const [over, setOver] = useState(0);
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");

  const bowlerStyle = {
    margin: "20px auto",
    padding: "20px",
    border: "3px solid green",
    borderRadius: "20px",
    width: "350px",
    textAlign: "center",
    backgroundColor: "#f0fff0",
    color: "green",
    boxShadow: "0 4px 10px rgba(0, 128, 0, 0.2)",
  };

  const handleBall = () => {
    const runOptions = [0, 1, 2, 3, 4, 6, "W"]; // random outcomes
    const outcome = runOptions[Math.floor(Math.random() * runOptions.length)];

    if (outcome === "W") {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      setMessage("⚡ Wicket!");
    } else {
      const newRuns = runs + outcome;
      setRuns(newRuns);
      setMessage(`🏏 Scored ${outcome} run${outcome > 1 ? "s" : ""}`);
    }

    // ball count and over logic
    if (ball === 5) {
      const newOver = over + 1;
      setOver(newOver);
      setBall(0);
      setMessage("🟢 Over complete!");
    } else {
      const newBalls = ball + 1;
      setBall(newBalls);
    }
  };

  const handleReset = () => {
    setBall(0);
    setOver(0);
    setRuns(0);
    setWickets(0);
    setMessage("Match reset!");
  };

  return (
    <div style={bowlerStyle}>
      <h2>🏏 Bangladesh vs Pakistan</h2>
      <h3>Bangladesh won the toss and chose to field first</h3>

      <h4>
        Overs: {over}.{ball}
      </h4>
      <h4>Runs: {runs}</h4>
      <h4>Wickets: {wickets}</h4>

      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
      )}

      <button
        onClick={handleBall}
        style={{
          padding: "10px 20px",
          margin: "5px",
          borderRadius: "10px",
          backgroundColor: "#28a745",
          color: "white",
          cursor: "pointer",
        }}
      >
        Bowl
      </button>

      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          margin: "5px",
          borderRadius: "10px",
          backgroundColor: "#dc3545",
          color: "white",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}
