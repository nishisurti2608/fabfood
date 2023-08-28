import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

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
