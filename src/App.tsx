import React from "react";
import { ToastContainer } from "react-toastify";

import Calendar from "./components/Calender/index";
import FormExample from "./components/DefaultBehaviour";
import DragDropList from "./components/DragAndDrop";
import EventBubblingDemo from "./components/EventBubblingDemo";
import DynamicList from "./components/EventDelegation";
import EnterKeyInput from "./components/keyDetection";
import PersistentCounter from "./components/LocalStorageCounter";
import ProgressBar from "./components/Progressbar";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2 style={{ color: "darkblue", fontFamily: "sans-serif" }}>
        Event Bubbling Demo
      </h2>
      <EventBubblingDemo />
      <h2
        style={{ fontFamily: "sans-serif", margin: "20px", color: "#00008B" }}
      >
        Re-Order Items
      </h2>

      <DragDropList />
      <ProgressBar />
      <EnterKeyInput />
      <ToastContainer position="top-right" autoClose={5000} />
      <DynamicList />
      <FormExample />
      <PersistentCounter />
      <ShoppingCart />
      <Calendar />
    </div>
  );
};

export default App;
