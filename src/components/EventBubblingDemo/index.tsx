import React from "react";

import { toast } from "react-toastify";

const EventBubblingDemo = () => {
  const handleOuterClick = () => {
    toast.success("Outer container clicked");
  };

  const handleMiddleClick = () => {
    toast.success("Middle Box Clicked (bubbled Up)!");
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success("Inner Button Clicked - Propagation stopped");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        border: "2px solid blue",
        padding: "20px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h3>Outer Container</h3>

      <div
        onClick={handleMiddleClick}
        style={{
          border: "2px solid green",
          padding: "15px",
          margin: "10px",
        }}
      >
        <h4>Middle Box</h4>

        <button
          onClick={handleButtonClick}
          style={{ padding: "8px 16px", cursor: "pointer" }}
          className="set-button"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default EventBubblingDemo;
