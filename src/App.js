import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  // const [counter2, setCounter2] = useState(0);
  console.log(counter, "Right in the function");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));

    // You can add a return for a cleanUp function from the last time useEffect runs
    // remove eventlistener to add again
    return () => {
      console.log("the return runs");
      setUsers([]);
    };
  }, [counter]);
  //First time it runs, (MOUNTING)
  // useEffect has argument, call back function and a array of dependencies as 2nd argument

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* <h1>{counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 5)}>Increment</button> */}
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
