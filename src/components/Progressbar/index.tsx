import React, { useState } from "react";

import "./styles.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 10, 100));
    }
  };

  const handleReset = () => setProgress(0);

  return (
    <div className="container">
      <h3 style={{ fontFamily: "ui-sans-serif" }}>Task Completion</h3>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progress > 5 && `${progress}%`}
        </div>
      </div>
      <div className="controls">
        <button onClick={handleIncrease} disabled={progress === 100}>
          Complete Task (+10%)
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
