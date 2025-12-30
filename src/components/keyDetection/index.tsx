import React, { useState } from "react";

import "./styles.css";

const EnterKeyInput = () => {
  const [value, setValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`You pressed Enter.value:${value}`);
      setValue("");
    }
  };
  return (
    <div className="flex">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Press Enter to submit"
        className="text"
      />
    </div>
  );
};

export default EnterKeyInput;
