import { useState, useEffect } from "react";

import "./styles.css";

const PersistentCounter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? Number(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <div className="center">
      <h2 className="header">Persistent Counter</h2>
      <p className="count">Count:{count}</p>

      <div className="button-card">
        <button className="set-button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="set-button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="set-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default PersistentCounter;
