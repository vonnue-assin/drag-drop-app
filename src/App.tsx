import React from "react";

import DragDropList from "./components/DragAndDrop";
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
    </div>
  );
};

export default App;
