/**
 * components
 * jsx
 * [conditional rendering]
 * state
 * event handler
 * props
 */

/**
 * server side data loading
 * 1. API: URL: https://jsonplaceholder.typicode.com/users
 */


/**
 * 1. just write a simple fetch with json conversion 
 * 2. wrap the data loading component under suspense 
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//  async await
// const loadData = async() =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
//     const data = response.json();
//     return data;
// }
