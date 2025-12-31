import React, { useState } from "react";
import { toast } from "react-toastify";

import "./styles.css";

const EnterKeyInput: React.FC = () => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      toast.success(`You pressed Enter. Value: ${value}`);
      setValue("");
    }
  };

  return (
    <div className="flex">
      <input
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
