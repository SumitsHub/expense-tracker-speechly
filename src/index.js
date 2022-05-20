import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId={process.env.REACT_APP_SPEECHLY_ID} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
