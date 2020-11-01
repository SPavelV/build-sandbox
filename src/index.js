import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

export const App = () => {
  return <p>This is WebPack React</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));
