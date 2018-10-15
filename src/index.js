import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

injectGlobal`
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding:0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
`;

const App = () => {
  return <div>hi</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
