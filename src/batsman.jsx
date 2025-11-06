import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0); // do not set intial value is 0, it's show undefined

  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const batsmanStyle = {
    margin: "10px",
    padding: "10px",
    border: "3px solid green",
    borderRadius: "20px",
  };

  const handleSingle = () => {
    const newSingle = runs + 1;
    setRuns(newSingle);
  };

  const handleFour = () => {
    const newFour = runs + 4;
    const updatedFours = fours + 1;
    setFours(updatedFours);
    setRuns(newFour);
  };

  const handleSix = () => {
    const newSix = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(newSix);
  };

  return (
    <div style={batsmanStyle}>
      <h1>Bangladesh vs Australia</h1>
      <h2>Bangladesh Won touch and choose Bat first</h2>
      {runs > 50 && <p>Congratulations! Your Score : {runs}</p>}
      {runs > 100 && <p>Congratulations! Your Score : {runs}</p>}
      <h3>Bangladesh Score: {runs}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h3>Boundary Six: {sixes}</h3>
        <h3>Boundary Four: {fours}</h3>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    </div>
  );
}
