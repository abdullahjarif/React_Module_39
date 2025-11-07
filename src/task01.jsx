import { useState } from "react";

export default function AppCounter() {
  const [val, setVal] = useState(0);

  const handleResetBtn = () => {
    setVal(0);
  };

  const handleInc = () => {
    const updateInc = val + 1;
    setVal(updateInc);
  };
  const handleDec = () => {
    const updateDec = val - 1;
    setVal(updateDec);
  };

  return (
    <div className="card">
      <h3>Simple Counter App</h3>

      <p
        style={{
          margin: "10px",
          padding: "10px",
          border: "3px solid #fbc061aa",
          borderRadius: "20px",
        }}
      >
        Show Result: {val}{" "}
      </p>

      <div
        style={{
          margin: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={handleInc}>Increased</button>
        <button onClick={handleDec}>Decreased</button>
        <button onClick={handleResetBtn}>Reset</button>
      </div>
    </div>
  );
}
