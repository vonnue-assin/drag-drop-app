import { useState } from "react";

import { calculatorButtons } from "../../utils/calculatorButtons";

import "./styles.css";

const Calculator = () => {
  const [value, setValue] = useState<string>("");

  const handleClick = (input: string) => {
    setValue((prev) => prev + input);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">CALCULATOR</h2>
      <input type="text" value={value} readOnly className="input" />
      <div className="grid">
        {calculatorButtons.map(({ label, category }) => (
          <button
            key={label}
            onClick={() => handleClick(label)}
            className={`grid-button ${
              category === "operator" ? "operator-button" : "number-button"
            }`}
          >
            {label}
          </button>
        ))}

        <button className="grid-button set" onClick={handleClear}>
          C
        </button>
        <button className="grid-button set" onClick={handleDelete}>
          DEL
        </button>
        <button className="grid-button set" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
