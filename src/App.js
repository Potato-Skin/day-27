import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// const obj = {
//   year: 2020,
//   hello: "banana",
//   jakarta: "city ",
// };

// const { year, ...words } = obj;
// console.log(words);
// console.log(words);
// console.log(obj);

// const arr = ["the office", "bears", "beets", "battlestar galactica"];
// function returnsFancyStuff() {
//   return ["the office", "bears", "beets", "battlestar galactica"];
// }

// // const [one, two] = arr;
// const [
//   show,
//   animal,
//   vegetableQuestionMark,
//   accordingToFilipeSomeFutureThing,
// ] = returnsFancyStuff();

// // const show = arr[0]
// // const animal = arr[1]
// // const vegetableQuestionMark = arr[2]

// function returnsTwoElementArray(arg) {
//   return [arg, console.log];
// }

// const [value, print] = returnsTwoElementArray(3);

// print(value);

// // const log = console.log;

function Footer(props) {
  return <footer>Hello from footer: {props.counter}</footer>;
}

function App() {
  const [counter, setCounter] = useState(1);

  // let counter = 0;
  function increment() {
    // counter++;
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Footer counter={counter} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {counter}
        </a>
      </header>
    </div>
  );
}

export default App;

// const span = document.querySelector("span");
// const plusButton = document.querySelector(".plus");
// const minusButton = document.querySelector(".minus");
// const footer = document.querySelector("footer");

// plusButton.addEventListener("click", () => {
//   const spanValue = parseInt(span.innerText);

//   const footerVal = parseInt(footer.innerText);

//   span.innerText = spanValue ? spanValue + 1 : 1;
//   footer.innerText = footerVal ? footerVal + 1 : 1;
// });

// minusButton.addEventListener("click", () => {
//   const spanValue = parseInt(span.innerText);

//   span.innerText = spanValue ? spanValue - 1 : 0;
// });
