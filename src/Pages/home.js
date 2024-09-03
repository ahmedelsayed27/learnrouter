import NavBar from "./navbar";
import { useState } from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function Home() {
  const [count, setcount] = useState(0);
  const [login, setlogin] = useState(false);
  function MyButton({ Count, onBtnClick }) {
    //const [count ,setcount] = useState(0) === state for each btn to
    // manage state for all btns we need but the one state on parent component
    return <button onClick={onBtnClick}>you click me {Count}</button>;
  }
  function HandleClick() {
    setcount(count + 1);
  }

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.title == "Apple" ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          managing the state
          <MyButton Count={count} onBtnClick={HandleClick} />
          <MyButton Count={count} onBtnClick={HandleClick} />
          <ul>{listItems}</ul>
          <button
            onClick={() => {
              setlogin(!login);
            }}
          >
            log in - out{" "}
          </button>
          {login ? <h4>you are log in</h4> : <h4>register</h4>}
          {login && (
            <h3>
              {" "}
              log in short cut in case we want to make rendering only on true
              condtion{" "}
            </h3>
          )}
        </header>
      </div>
    </>
  );
}
export default Home;
