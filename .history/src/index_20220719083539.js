import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from ".components/App"

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
