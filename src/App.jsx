import "./App.css";
import Counter from "./counter";
import Batsman from './batsman';
import Bowler from "./bowler";

function App() {

  // function handleClick() {
  //   alert("I am react");
  // }

  // // most used arrow function
  // const handleClick3 = () => {
  //   alert("Clicked me 3");
  // };

  // const clicked4 = () => {
  //   alert("I am Jarif");
  // };

  // const handleAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum);
  // };

  // Arrow function structure
  // const function_name = () empty perameter => {
  //   main body
  // };

  return (
    <>
      <h1>Introduction to React Part 2</h1>
      <Bowler></Bowler>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick}>Click Me</button>

      <button
        onClick={function handleClick2() {
          alert("I am react 2");
        }}
      >
        Click Me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={clicked4}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add</button> */}

      {/* e. preventDefault */}
    </>
  );
}

export default App;


// function useState(initialVal) {
//     let state = initialVal;
//     function setState(newVal) {
//         state = newVal;
//     };
// };
