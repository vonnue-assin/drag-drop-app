import React from "react";
import { ToastContainer } from "react-toastify";

import FormExample from "./components/DefaultBehaviour";
import DragDropList from "./components/DragAndDrop";
import DynamicList from "./components/EventDelegation";
import ProgressBar from "./components/Progressbar";
import EnterKeyInput from "./components/keyDetection";

import "./App.css";

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2
        style={{ fontFamily: "sans-serif", margin: "20px", color: "#00008B" }}
      >
        Re-Order Items
      </h2>
      <DragDropList />
      <ProgressBar />
      <EnterKeyInput />
      <ToastContainer position="top-right" autoClose={2000} />
      <DynamicList />
      <FormExample />
    </div>
  );
};

export default App;
