import React, { useState } from "react";

const DragDropList: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    "Item One  1️⃣",
    "Item Two  2️⃣",
    "Item Three  3️⃣",
    "Item Four  4️⃣",
  ]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems[draggedIndex];

    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDraggedIndex(null);
  };

  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "8px 10px",
      }}
    >
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px 80px",
            marginBottom: "8px",
            backgroundColor: "#f2f2f2",
            borderRadius: "6px",
            cursor: "grab",
            margin: "15px",
            color: "black",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragDropList;
