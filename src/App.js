import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Restcard from "./components/Restaurantcards/Restcard";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
