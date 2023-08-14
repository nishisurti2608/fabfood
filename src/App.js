import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
