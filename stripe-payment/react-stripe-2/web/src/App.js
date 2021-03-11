import { useState } from "react";
import "./App.css";
import StripeContainer from "./components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Payment Project</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          {" "}
          <h3>$10</h3>{" "}
          <img
            className="App__img"
            src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2020/01/stationery-products_bigbasket.jpg"
            alt=""
          />
          <button className="App__button" onClick={() => setShowItem(true)}>
            Purchase Item
          </button>{" "}
        </>
      )}
    </div>
  );
}

export default App;
