import React, { useState } from "react";
import { toast } from "react-toastify";

const DynamicList = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItems = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  const handleListClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "LI") {
      toast.success(`You clicked on: ${target.textContent}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        flexDirection: "column",
      }}
    >
      <button
        onClick={addItems}
        style={{
          padding: "5px 10px",
          border: "2px solid black",
          color: "#fff",
          background: "black",
          fontFamily: "sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Add Item
      </button>
      <ul onClick={handleListClick}>
        {items.map((items, index) => (
          <li
            key={index}
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
              position: "relative",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "black",
                borderRadius: "50%",
                marginRight: "8px",
                display: "inline-block",
              }}
            ></span>
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
