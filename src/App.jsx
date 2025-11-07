import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Bowler from "./bowler";
import Users from "./users";
import { Suspense } from "react";
import Friends from "./friends";
import Post from "./users_post";
import Players from "./players";
import AppCounter from "./task01";
import ShowHideApp from "./task02";
import UserList from "./task03";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

// another way [async await]
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

// async await
const usersPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

// with async await
const user_list = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

function App() {
  const friendsPromise = fetchFriends();
  const postsUser = usersPost();

  const userLists = user_list();

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

      <Suspense fallback={<h3>Users are loading ...</h3>}>
        <UserList userLists = {userLists}></UserList>
      </Suspense>

      <ShowHideApp></ShowHideApp>

      <AppCounter></AppCounter>

      <Players></Players>

      <Suspense fallback={<h3>Posts are loading ... </h3>}>
        <Post postsUser={postsUser}></Post>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

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
