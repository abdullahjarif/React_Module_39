import { useEffect, useState } from "react";

export default function Players() {
  // use hook
  const [players, setPlayers] = useState([]);

  // vejailla hook ---> data loading
  //  previous system
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="card">
      <h4>Players: {players.length}</h4>

      <ol>
        {players.map((player) => (
         <li>{player.name}</li>
        ))}
      </ol>
    </div>
  );
}
